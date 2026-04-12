/**
 * Generate PDF from the SEO audit report HTML using Puppeteer.
 * Preserves the dark background, gradients, and all visual styling.
 *
 * Usage: node scripts/generate-pdf.mjs
 */

import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, "../reports/seo-audit.html");
const timestamp = new Date().toISOString().slice(0, 16).replace(/[T:]/g, "-");
const pdfPath = path.resolve(
  __dirname,
  `../reports/LCR-Aero-SEO-AEO-Report-${timestamp}.pdf`
);

async function main() {
  console.log("  Launching browser...");
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log("  Loading report...");
  await page.goto(`file://${htmlPath.replace(/\\/g, "/")}`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });

  // No additional style overrides needed — CSS is now PDF-native

  console.log("  Generating PDF...");
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
    preferCSSPageSize: false,
  });

  await browser.close();
  console.log(`  PDF saved to: ${pdfPath}`);
  console.log(
    `  File size: ${(
      (await import("fs")).statSync(pdfPath).size / 1024
    ).toFixed(0)} KB`
  );
}

main().catch((err) => {
  console.error("  Error:", err.message);
  process.exit(1);
});
