"use client";

import { useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useReducedMotion } from "framer-motion";
import { useContent } from "@/lib/i18n";
import { InquirySelect } from "./InquirySelect";

type FormValues = {
  name: string;
  email: string;
  company?: string;
  inquiryType: "consultation" | "mentorship" | "coaching" | "other";
  message: string;
  website?: string;
};

export function ContactForm() {
  const { contactPage, site } = useContent();
  const f = contactPage.form;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const reduce = useReducedMotion();

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, f.errors.name),
        email: z.string().email(f.errors.email),
        company: z.string().optional(),
        inquiryType: z.enum(["consultation", "mentorship", "coaching", "other"]),
        message: z.string().min(10, f.errors.message),
        website: z.string().max(0).optional(),
      }),
    [f.errors.email, f.errors.message, f.errors.name],
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      inquiryType: "consultation",
      company: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    try {
      const locale =
        typeof document !== "undefined"
          ? document.documentElement.lang === "en"
            ? "en"
            : "bg"
          : "bg";
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      className="soft-card relative overflow-hidden p-5 sm:p-7"
      animate={reduce ? undefined : { y: [0, -3, 0] }}
      transition={
        reduce
          ? undefined
          : { duration: 9, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 space-y-5"
        noValidate
      >
        <div className="absolute -left-[9999px]" aria-hidden>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={f.name} error={errors.name?.message}>
            <input className="input-field" autoComplete="name" {...register("name")} />
          </Field>
          <Field label={f.email} error={errors.email?.message}>
            <input
              className="input-field"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
          </Field>
        </div>

        <Field
          label={`${f.company} (${f.companyOptional})`}
          error={errors.company?.message}
        >
          <input
            className="input-field"
            autoComplete="organization"
            {...register("company")}
          />
        </Field>

        <Field label={f.inquiryType} error={errors.inquiryType?.message}>
          <Controller
            name="inquiryType"
            control={control}
            render={({ field }) => (
              <InquirySelect
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                name={field.name}
                error={errors.inquiryType?.message}
              />
            )}
          />
        </Field>

        <Field label={f.message} error={errors.message?.message}>
          <textarea
            className="input-field min-h-[140px] resize-y"
            rows={5}
            {...register("message")}
          />
        </Field>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="btn-primary w-full disabled:opacity-60 sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? f.submitting : f.submit}
          </button>
          {status === "success" && (
            <p className="text-sm text-accent" role="status">
              {f.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700" role="alert">
              {f.error}{" "}
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-accent/50 underline-offset-2 hover:text-foreground"
              >
                {site.email}
              </a>
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-[0.14em] text-muted">
        {label}
      </span>
      {children}
      {error ? <span className="block text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
