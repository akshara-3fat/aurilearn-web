"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

const roles = [
  "C-Suite / Executive",
  "VP / Director",
  "Engineering Manager",
  "Senior Engineer / Tech Lead",
  "Software / Platform Engineer",
  "DevOps / SRE Engineer",
  "Security Engineer",
  "IT Manager / Administrator",
  "Training & Development Lead",
  "HR / Talent & Learning",
  "Procurement / Vendor Management",
  "Other",
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Austria",
  "Bangladesh",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Colombia",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Hong Kong",
  "Hungary",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Jordan",
  "Kenya",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
];

const fieldClass =
  "h-12 w-full rounded-md border border-ink-300 bg-white px-3.5 text-[15px] text-ink-900 placeholder:text-ink-400 focus:border-gold-500 focus:outline-none";

const labelClass = "text-[13px] font-semibold text-ink-700";

/**
 * Where demo requests are POSTed. Set NEXT_PUBLIC_DEMO_FORM_ENDPOINT to the
 * backend URL (e.g. http://localhost:8000/api/demo-requests in .env.local).
 */
const demoEndpoint =
  process.env.NEXT_PUBLIC_DEMO_FORM_ENDPOINT?.trim() || "/contact.php";

const personalEmailDomains = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "yahoo.co.uk",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "mail.com",
  "gmx.com",
  "rediffmail.com",
];

type FormValues = {
  firstName: string;
  lastName: string;
  workEmail: string;
  jobRole: string;
  jobRoleOther: string;
  telephone: string;
  country: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

function validate(v: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!v.firstName) errors.firstName = "First name is required.";
  if (!v.lastName) errors.lastName = "Last name is required.";
  if (!v.workEmail) {
    errors.workEmail = "Company email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.workEmail)) {
    errors.workEmail = "Please enter a valid email address.";
  } else {
    const domain = v.workEmail.toLowerCase().split("@").pop() ?? "";
    if (personalEmailDomains.includes(domain)) {
      errors.workEmail =
        "Please use your company email address. Personal email addresses (Gmail, Outlook, Yahoo, etc.) are not accepted.";
    }
  }
  if (!v.jobRole) errors.jobRole = "Job role is required.";
  if (v.jobRole === "Other" && !v.jobRoleOther) {
    errors.jobRoleOther = "Please tell us your job role.";
  }
  if (!v.telephone) {
    errors.telephone = "Telephone number is required.";
  } else if (!/^\+?[\d\s\-().]{7,20}$/.test(v.telephone)) {
    errors.telephone = "Please enter a valid phone number.";
  }
  if (!v.country) errors.country = "Country is required.";
  return errors;
}

/**
 * Pulls a readable message out of a JSON error body: `message` (PHP host),
 * a string `detail` (FastAPI HTTPException) or the first item of a `detail`
 * list (FastAPI validation error, prefixed "Value error, ").
 */
function serverMessage(result: unknown): string {
  if (!result || typeof result !== "object") return "";
  if ("message" in result && result.message) return String(result.message);
  if (!("detail" in result)) return "";
  const { detail } = result;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    const first: unknown = detail[0];
    if (first && typeof first === "object" && "msg" in first) {
      return String(first.msg).replace(/^Value error, /, "");
    }
  }
  return "";
}

async function submitDemoRequest(v: FormValues) {
  let response: Response;
  try {
    response = await fetch(demoEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name: v.firstName,
        last_name: v.lastName,
        work_email: v.workEmail,
        job_role: v.jobRole === "Other" ? v.jobRoleOther : v.jobRole,
        telephone: v.telephone,
        country: v.country,
      }),
    });
  } catch {
    throw new Error("We could not reach our server just now.");
  }
  const result: unknown = await response.json().catch(() => null);
  const message = serverMessage(result);
  if (!response.ok) {
    throw new Error(message || `Server returned ${response.status}.`);
  }
  if (
    result &&
    typeof result === "object" &&
    "success" in result &&
    result.success !== true &&
    result.success !== "true"
  ) {
    throw new Error(message || "The server could not save your request.");
  }
}

/** Enterprise demo request, saved by the backend at `demoEndpoint`. */
export function DemoRequestForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [jobRole, setJobRole] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: keyof FormValues) => String(data.get(key) ?? "").trim();
    const values: FormValues = {
      firstName: get("firstName"),
      lastName: get("lastName"),
      workEmail: get("workEmail"),
      jobRole: get("jobRole"),
      jobRoleOther: get("jobRoleOther"),
      telephone: get("telephone"),
      country: get("country"),
    };

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    try {
      await submitDemoRequest(values);
      setFirstName(values.firstName);
      setStatus("sent");
    } catch (error) {
      console.error("Demo request failed:", error);
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : "We could not send your request just now.",
      );
      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setErrors({});
    setErrorMessage("");
    setJobRole("");
  }

  const formClass =
    "flex min-w-0 flex-[1_1_520px] scroll-mt-8 flex-col gap-6 rounded-3xl bg-white p-[clamp(24px,3vw,36px)] text-ink-900 shadow-float";

  if (status === "sent") {
    return (
      <div
        id="demo"
        role="status"
        className={`${formClass} items-center justify-center py-16 text-center`}
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-success-bg text-success-fg">
          <CircleCheck size={32} strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-2.5">
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.015em]">
            Thank you, {firstName}!
          </h2>
          <p className="mx-auto max-w-sm text-[15px] leading-[1.6] text-ink-600">
            Your demo request has been received. An Aurilearn representative
            will reach out to you within one business day.
          </p>
        </div>
        <button
          type="button"
          onClick={reset}
          className="hover:text-gold-600 cursor-pointer text-sm font-semibold text-gold-700"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const invalid = (key: keyof FormValues) =>
    errors[key]
      ? { "aria-invalid": true, "aria-describedby": `${key}-error` }
      : {};

  return (
    <form
      id="demo"
      aria-labelledby="demo-title"
      onSubmit={handleSubmit}
      noValidate
      className={formClass}
    >
      <div className="flex flex-col gap-2.5">
        <h2
          id="demo-title"
          className="font-display text-[26px] font-semibold tracking-[-0.015em]"
        >
          Request an Enterprise Demo
        </h2>
        <p className="text-[15px] leading-[1.6] text-ink-600">
          Fill in your details below and an Aurilearn specialist will be in
          touch to schedule your personalised demo.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4">
        <Field
          id="demo-first"
          label="First name"
          error={errors.firstName}
          name="firstName"
        >
          <input
            id="demo-first"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Jane"
            required
            className={fieldClass}
            {...invalid("firstName")}
          />
        </Field>
        <Field
          id="demo-last"
          label="Last name"
          error={errors.lastName}
          name="lastName"
        >
          <input
            id="demo-last"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Smith"
            required
            className={fieldClass}
            {...invalid("lastName")}
          />
        </Field>
        <Field
          id="demo-email"
          label="Company email"
          error={errors.workEmail}
          name="workEmail"
        >
          <input
            id="demo-email"
            name="workEmail"
            type="email"
            autoComplete="email"
            placeholder="jane.smith@company.com"
            required
            className={fieldClass}
            {...invalid("workEmail")}
          />
        </Field>
        <Field
          id="demo-role"
          label="Job role"
          error={errors.jobRole}
          name="jobRole"
        >
          <select
            id="demo-role"
            name="jobRole"
            required
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className={fieldClass}
            {...invalid("jobRole")}
          >
            <option value="" disabled>
              Select your role…
            </option>
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </Field>
        {jobRole === "Other" && (
          <Field
            id="demo-role-other"
            label="Your job role"
            error={errors.jobRoleOther}
            name="jobRoleOther"
          >
            <input
              id="demo-role-other"
              name="jobRoleOther"
              type="text"
              placeholder="e.g. Cloud Architect"
              required
              className={fieldClass}
              {...invalid("jobRoleOther")}
            />
          </Field>
        )}
        <Field
          id="demo-phone"
          label="Telephone"
          error={errors.telephone}
          name="telephone"
        >
          <input
            id="demo-phone"
            name="telephone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 000 0000"
            required
            className={fieldClass}
            {...invalid("telephone")}
          />
        </Field>
        <Field
          id="demo-country"
          label="Country"
          error={errors.country}
          name="country"
        >
          <select
            id="demo-country"
            name="country"
            autoComplete="country-name"
            required
            defaultValue=""
            className={fieldClass}
            {...invalid("country")}
          >
            <option value="" disabled>
              Select country…
            </option>
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </Field>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex flex-col gap-1 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <span className="font-semibold">{errorMessage}</span>
          <span>
            Please try again, or email us directly at{" "}
            <a
              href={`mailto:${siteConfig.salesEmail}`}
              className="font-semibold underline"
            >
              {siteConfig.salesEmail}
            </a>
            .
          </span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 pt-1">
        <p className="flex-[1_1_260px] text-[13px] leading-[1.55] text-ink-500">
          By submitting, you agree to Aurilearn’s privacy policy. Your details
          are used only to arrange your demo.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-[52px] shrink-0 cursor-pointer items-center gap-2.5 rounded-lg bg-gold-500 px-6 text-base font-semibold text-navy-850 transition-colors hover:bg-gold-400 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Submitting…" : "Submit Request"}
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  name,
  error,
  children,
}: {
  id: string;
  label: string;
  name: keyof FormValues;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={labelClass}>
        {label} <span className="text-gold-700">*</span>
      </label>
      {children}
      {error && (
        <p
          id={`${name}-error`}
          className="text-[13px] leading-[1.4] text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
