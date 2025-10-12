"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, User, Building2, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(80),
  email: z.string().email({ message: "Please enter a valid email." }),
  company: z.string().max(120).optional(),
  message: z
    .string()
    .min(20, { message: "Please provide a bit more detail (min 20 chars)." })
    .max(2000),
  // honeypot: should stay empty
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const messageId = useId();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      website: "", // honeypot
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setSubmissionMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setSubmissionStatus("success");
        setSubmissionMessage(data.message ?? "We’ve received your message. Talk soon!");
        form.reset();
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(data.message ?? "Something went wrong.");
      }
    } catch (e) {
      setSubmissionStatus("error");
      setSubmissionMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submissionStatus === "success") {
    return (
      <div className="text-center">
        <h3 className="text-xl font-bold text-emerald-600">Message sent!</h3>
        <p className="text-gray-600 mt-1">{submissionMessage}</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Your name"
                    {...field}
                    disabled={isSubmitting}
                    autoComplete="name"
                    className="pl-9"
                    aria-invalid={!!form.formState.errors.name}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="you@company.com"
                    {...field}
                    type="email"
                    disabled={isSubmitting}
                    autoComplete="email"
                    className="pl-9"
                    aria-invalid={!!form.formState.errors.email}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company (optional) */}
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Your company (optional)"
                    {...field}
                    disabled={isSubmitting}
                    autoComplete="organization"
                    className="pl-9"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message with live character count */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            const count = field.value?.length ?? 0;
            return (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel htmlFor={messageId}>
                    Message <span className="text-red-500">*</span>
                  </FormLabel>
                  <span className="text-xs text-gray-500">{count}/2000</span>
                </div>
                <FormControl>
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id={messageId}
                      placeholder="How can we help you?"
                      className="resize-y pl-9"
                      {...field}
                      disabled={isSubmitting}
                      rows={5}
                      aria-invalid={!!form.formState.errors.message}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        {/* Honeypot (hidden) */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <input
              {...field}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          )}
        />

        <div className="flex items-center justify-between gap-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>

          {submissionStatus === "error" && (
            <p className="text-sm text-red-600">{submissionMessage}</p>
          )}
        </div>
      </form>
    </Form>
  );
}
