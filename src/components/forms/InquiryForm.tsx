"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { submitInquiry } from "@/actions/submit-inquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  Loader2,
  User,
  Building2,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";

// ---------- Schema ----------

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  serviceInterest: z.string().min(1, "Please select a service"),
  certType: z.string().optional(),
  changeType: z.string().optional(),
  projectDetails: z.string().optional(),
  referralSource: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// ---------- Constants ----------

const TOTAL_STEPS = 5;

const serviceOptions = [
  { value: "initial-certification", label: "Initial Certification" },
  { value: "operational-expansion", label: "Operational Expansion" },
  { value: "safety-sms", label: "Safety & SMS" },
  { value: "technical-publications", label: "Technical Publications" },
  { value: "ai-enhanced", label: "AI-Enhanced Services" },
  { value: "not-sure", label: "Not Sure \u2014 I Need Guidance" },
];

const certTypeOptions = [
  { value: "part-121", label: "Part 121" },
  { value: "part-135", label: "Part 135" },
  { value: "part-145", label: "Part 145" },
  { value: "part-137", label: "Part 137" },
  { value: "other", label: "Other" },
];

const changeTypeOptions = [
  { value: "new-aircraft-type", label: "New Aircraft Type" },
  { value: "etops", label: "ETOPS" },
  { value: "extended-overwater", label: "Extended Overwater" },
  { value: "flag-supplemental", label: "Flag/Supplemental Transition" },
  { value: "cpdlc", label: "CPDLC" },
  { value: "additional-ratings", label: "Additional Ratings" },
  { value: "other", label: "Other" },
];

const referralOptions = [
  { value: "search-engine", label: "Search Engine" },
  { value: "referral", label: "Referral" },
  { value: "social-media", label: "Social Media" },
  { value: "industry-event", label: "Industry Event / Conference" },
  { value: "other", label: "Other" },
];

// ---------- Step Indicator ----------

function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="mb-10 flex items-center justify-center gap-3">
      {Array.from({ length: totalSteps }, (_, i) => {
        const stepNum = i + 1;
        const isCompleted = stepNum < currentStep;
        const isCurrent = stepNum === currentStep;

        return (
          <div key={stepNum} className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                isCompleted
                  ? "bg-cyan text-deep-blue"
                  : isCurrent
                    ? "bg-deep-blue text-white ring-2 ring-cyan ring-offset-2"
                    : "bg-aero-silver text-slate"
              }`}
            >
              {isCompleted ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                stepNum
              )}
            </div>
            {stepNum < totalSteps && (
              <div
                className={`h-0.5 w-6 rounded-full transition-colors duration-300 sm:w-10 ${
                  isCompleted ? "bg-cyan" : "bg-aero-silver"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---------- Radio Card ----------

function RadioCard({
  value,
  label,
  selected,
  onSelect,
}: {
  value: string;
  label: string;
  selected: boolean;
  onSelect: (value: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`w-full rounded-xl border-2 px-5 py-4 text-left font-body text-sm font-medium transition-all duration-200 ${
        selected
          ? "border-cyan bg-cyan/5 text-deep-blue shadow-sm"
          : "border-aero-silver bg-white text-slate hover:border-cyan/30 hover:bg-aero-silver/20"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
            selected ? "border-cyan bg-cyan" : "border-aero-silver-dark"
          }`}
        >
          {selected && (
            <div className="h-2 w-2 rounded-full bg-deep-blue" />
          )}
        </div>
        {label}
      </div>
    </button>
  );
}

// ---------- Success Screen ----------

function SuccessScreen({ certType }: { certType?: string }) {
  let message =
    "Thank you. A member of our team will be in touch within 24 hours.";

  if (certType === "part-121") {
    message =
      "Thank you. Our Part 121 Certification Specialist will contact you within 24 hours. In the meantime, download our Part 121 Certification Readiness Checklist.";
  } else if (certType === "part-135") {
    message =
      "Thank you. Our Part 135 team will reach out shortly. Download our Part 135 Pre-Application Guide while you wait.";
  } else if (certType === "part-145") {
    message =
      "Thank you. Our Part 145 Repair Station team will be in touch within 24 hours to discuss your certification needs.";
  } else if (certType === "part-137") {
    message =
      "Thank you. Our agricultural aviation specialist will be in touch within 24 hours to discuss your Part 137 requirements.";
  }

  return (
    <div className="flex flex-col items-center py-12 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan/10">
        <CheckCircle className="h-10 w-10 text-cyan" />
      </div>
      <h3 className="mb-4 font-heading text-2xl font-bold text-deep-blue">
        Inquiry Submitted
      </h3>
      <p className="mx-auto max-w-md font-body text-base leading-relaxed text-slate">
        {message}
      </p>
    </div>
  );
}

// ---------- Main Form ----------

export function InquiryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      certType: "",
      changeType: "",
      projectDetails: "",
      referralSource: "",
    },
  });

  const serviceInterest = form.watch("serviceInterest");
  const certType = form.watch("certType");

  // Determine whether step 3 is needed
  const needsConditionalStep =
    serviceInterest === "initial-certification" ||
    serviceInterest === "operational-expansion";

  function getEffectiveStep(): number {
    // If step 3 is not needed, skip it
    if (!needsConditionalStep && currentStep >= 3) {
      return currentStep + 1;
    }
    return currentStep;
  }

  async function validateCurrentStep(): Promise<boolean> {
    const step = getEffectiveStep();

    switch (step) {
      case 1:
        return form.trigger(["fullName", "companyName", "email"]);
      case 2:
        return form.trigger("serviceInterest");
      case 3:
        // Conditional step -- no strict validation, just allow progress
        return true;
      case 4:
        return true;
      case 5:
        return true;
      default:
        return true;
    }
  }

  async function handleNext() {
    const valid = await validateCurrentStep();
    if (!valid) return;

    if (currentStep < TOTAL_STEPS) {
      // If step 3 not needed and we are at step 2, skip to effective step 4 (actual step 3)
      if (!needsConditionalStep && currentStep === 2) {
        setCurrentStep(3); // This maps to effective step 4
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  }

  function handlePrev() {
    if (currentStep > 1) {
      if (!needsConditionalStep && currentStep === 3) {
        setCurrentStep(2);
      } else {
        setCurrentStep((prev) => prev - 1);
      }
    }
  }

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      // Map form field names to server action expected format
      const serviceLabel =
        serviceOptions.find((o) => o.value === data.serviceInterest)?.label ??
        data.serviceInterest;

      // Determine serviceDetail from the conditional step
      let serviceDetail: string | undefined;
      if (data.serviceInterest === "initial-certification" && data.certType) {
        serviceDetail =
          certTypeOptions.find((o) => o.value === data.certType)?.label ??
          data.certType;
      } else if (
        data.serviceInterest === "operational-expansion" &&
        data.changeType
      ) {
        serviceDetail =
          changeTypeOptions.find((o) => o.value === data.changeType)?.label ??
          data.changeType;
      }

      const referralLabel = data.referralSource
        ? referralOptions.find((o) => o.value === data.referralSource)?.label ??
          data.referralSource
        : undefined;

      const result = await submitInquiry({
        fullName: data.fullName,
        companyName: data.companyName,
        email: data.email,
        phone: data.phone || undefined,
        serviceInterest: serviceLabel,
        serviceDetail,
        projectDetails: data.projectDetails || undefined,
        referralSource: referralLabel,
      });

      if (result.success) {
        toast.success(result.message);
        setIsSubmitted(true);
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error(
        "Something went wrong. Please try again or email us at info@lcr.aero."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const effectiveStep = getEffectiveStep();
  const isLastStep = currentStep === TOTAL_STEPS;

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-aero-silver bg-white p-8 shadow-sm sm:p-12">
        <SuccessScreen certType={certType} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-aero-silver bg-white p-8 shadow-sm sm:p-12">
      <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Step 1: Contact Info */}
        {effectiveStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-heading text-xl font-bold text-deep-blue">
                Contact Information
              </h3>
              <p className="mb-8 font-body text-sm text-slate">
                Tell us who you are so we can connect you with the right expert.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="fullName"
                  className="mb-1.5 text-sm font-medium text-deep-blue"
                >
                  <User className="h-3.5 w-3.5 text-cyan" />
                  Full Name <span className="text-orange">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Smith"
                  {...form.register("fullName")}
                  className="h-11"
                />
                {form.formState.errors.fullName && (
                  <p className="mt-1 text-xs text-orange">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="companyName"
                  className="mb-1.5 text-sm font-medium text-deep-blue"
                >
                  <Building2 className="h-3.5 w-3.5 text-cyan" />
                  Company Name <span className="text-orange">*</span>
                </Label>
                <Input
                  id="companyName"
                  placeholder="Acme Aviation LLC"
                  {...form.register("companyName")}
                  className="h-11"
                />
                {form.formState.errors.companyName && (
                  <p className="mt-1 text-xs text-orange">
                    {form.formState.errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="mb-1.5 text-sm font-medium text-deep-blue"
                >
                  <Mail className="h-3.5 w-3.5 text-cyan" />
                  Email Address <span className="text-orange">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@acmeaviation.com"
                  {...form.register("email")}
                  className="h-11"
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-xs text-orange">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="phone"
                  className="mb-1.5 text-sm font-medium text-deep-blue"
                >
                  <Phone className="h-3.5 w-3.5 text-cyan" />
                  Phone Number{" "}
                  <span className="text-xs font-normal text-slate">
                    (optional)
                  </span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...form.register("phone")}
                  className="h-11"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Service Interest */}
        {effectiveStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-heading text-xl font-bold text-deep-blue">
                Service Interest
              </h3>
              <p className="mb-8 font-body text-sm text-slate">
                What type of service are you looking for?
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {serviceOptions.map((option) => (
                <RadioCard
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  selected={serviceInterest === option.value}
                  onSelect={(val) => {
                    form.setValue("serviceInterest", val);
                    // Clear conditional fields when changing service
                    form.setValue("certType", "");
                    form.setValue("changeType", "");
                  }}
                />
              ))}
            </div>
            {form.formState.errors.serviceInterest && (
              <p className="text-xs text-orange">
                {form.formState.errors.serviceInterest.message}
              </p>
            )}
          </div>
        )}

        {/* Step 3: Conditional Follow-Up */}
        {effectiveStep === 3 && needsConditionalStep && (
          <div className="space-y-6">
            {serviceInterest === "initial-certification" && (
              <>
                <div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-deep-blue">
                    Certification Type
                  </h3>
                  <p className="mb-8 font-body text-sm text-slate">
                    Which certification are you seeking?
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {certTypeOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={certType === option.value}
                      onSelect={(val) => form.setValue("certType", val)}
                    />
                  ))}
                </div>
              </>
            )}

            {serviceInterest === "operational-expansion" && (
              <>
                <div>
                  <h3 className="mb-2 font-heading text-xl font-bold text-deep-blue">
                    Type of Change
                  </h3>
                  <p className="mb-8 font-body text-sm text-slate">
                    What type of operational change are you planning?
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {changeTypeOptions.map((option) => (
                    <RadioCard
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={
                        form.watch("changeType") === option.value
                      }
                      onSelect={(val) => form.setValue("changeType", val)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 4: Project Details */}
        {effectiveStep === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-heading text-xl font-bold text-deep-blue">
                Project Details
              </h3>
              <p className="mb-8 font-body text-sm text-slate">
                Tell us about your project, timeline, and any specific
                challenges you are facing.
              </p>
            </div>

            <div>
              <Label
                htmlFor="projectDetails"
                className="mb-1.5 text-sm font-medium text-deep-blue"
              >
                Project Description
              </Label>
              <Textarea
                id="projectDetails"
                placeholder="Describe your project scope, desired timeline, and any challenges or specific requirements..."
                rows={6}
                {...form.register("projectDetails")}
                className="resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 5: Referral Source */}
        {effectiveStep === 5 && (
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-heading text-xl font-bold text-deep-blue">
                How Did You Hear About Us?
              </h3>
              <p className="mb-8 font-body text-sm text-slate">
                This helps us understand how people find LCR Aero Group.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {referralOptions.map((option) => (
                <RadioCard
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  selected={form.watch("referralSource") === option.value}
                  onSelect={(val) => form.setValue("referralSource", val)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-10 flex items-center justify-between gap-4">
          {currentStep > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={handlePrev}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>
          ) : (
            <div />
          )}

          {isLastStep ? (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="gap-2 rounded-full bg-cyan px-8 py-5 font-semibold text-deep-blue transition-all hover:scale-[1.02] hover:bg-cyan-dark hover:shadow-lg hover:shadow-cyan/20 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  Submitting...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Submit Inquiry
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleNext}
              className="gap-2 rounded-full bg-deep-blue px-8 py-5 font-semibold text-white transition-all hover:bg-deep-blue-lighter"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
