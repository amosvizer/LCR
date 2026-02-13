"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface ParticleHeroProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 65;
const PARTICLE_COLOR = "0, 232, 255"; // Electric Cyan (#00E8FF) as RGB
const PARTICLE_OPACITY = 0.3;
const LINE_OPACITY = 0.12;
const CONNECTION_DISTANCE = 150;
const PARTICLE_SPEED = 0.3;
const PARTICLE_MIN_RADIUS = 1;
const PARTICLE_MAX_RADIUS = 2.5;

export function ParticleHero({ className }: ParticleHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
        vy: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
        radius:
          PARTICLE_MIN_RADIUS +
          Math.random() * (PARTICLE_MAX_RADIUS - PARTICLE_MIN_RADIUS),
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle high-DPI displays
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      dimensionsRef.current = { width, height };

      // Re-initialize particles if dimensions changed significantly
      if (particlesRef.current.length === 0) {
        initParticles(width, height);
      }
    };

    updateCanvasSize();
    initParticles(dimensionsRef.current.width, dimensionsRef.current.height);

    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    resizeObserver.observe(canvas.parentElement!);

    const drawFrame = () => {
      const { width, height } = dimensionsRef.current;
      const particles = particlesRef.current;

      ctx.clearRect(0, 0, width, height);

      // Update particle positions
      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges seamlessly
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      }

      // Draw connections between nearby particles
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = CONNECTION_DISTANCE * CONNECTION_DISTANCE;

          if (distSq < maxDistSq) {
            const opacity =
              LINE_OPACITY * (1 - distSq / maxDistSq);
            ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const particle of particles) {
        ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${PARTICLE_OPACITY})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationIdRef.current = requestAnimationFrame(drawFrame);
    };

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Draw a single static frame
      drawFrame();
      cancelAnimationFrame(animationIdRef.current);
    } else {
      animationIdRef.current = requestAnimationFrame(drawFrame);
    }

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      resizeObserver.disconnect();
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden="true"
    />
  );
}
