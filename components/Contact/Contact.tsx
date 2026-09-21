"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.css";

const contactDetails = [
  {
    id: "email",
    label: "Email",
    value: "veyntlabs@gmail.com",
    href: "mailto:veyntlabs@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 89251 71946",
    href: "tel:+918925171946",
  },
  {
    id: "location",
    label: "Location",
    value: "India",
    href: null,
  },
];

const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    // Simulate async send — replace with actual API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className={styles.contact} ref={ref} aria-label="Contact Veynt Labs">
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.p>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Let&apos;s talk.
          </motion.h2>

          <motion.div
            className={styles.details}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {contactDetails.map((d) => (
              <div key={d.id} className={styles.detailItem}>
                <span className={styles.detailLabel}>{d.label}</span>
                {d.href ? (
                  <a href={d.href} className={styles.detailValue} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {d.value}
                  </a>
                ) : (
                  <span className={styles.detailValue}>{d.value}</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.socials}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Veynt Labs on ${s.label}`}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === "success" ? (
            <div className={styles.success} role="status" aria-live="polite">
              <div className={styles.successIcon} aria-hidden="true">✓</div>
              <h3 className={styles.successTitle}>Message sent!</h3>
              <p className={styles.successText}>
                Thanks for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
              <button
                className={styles.successBtn}
                onClick={() => setStatus("idle")}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate aria-label="Contact form">
              <div className={styles.formRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-name" className={styles.fieldLabel}>
                    Name <span aria-hidden="true" className={styles.required}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.error} role="alert">{errors.name}</span>
                  )}
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="contact-email" className={styles.fieldLabel}>
                    Email <span aria-hidden="true" className={styles.required}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    placeholder="your@email.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.error} role="alert">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-company" className={styles.fieldLabel}>
                  Company
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your company (optional)"
                  autoComplete="organization"
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-message" className={styles.fieldLabel}>
                  Message <span aria-hidden="true" className={styles.required}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                  placeholder="Tell us about your project or idea..."
                  rows={5}
                  aria-required="true"
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className={styles.error} role="alert">{errors.message}</span>
                )}
              </div>

              {status === "error" && (
                <p className={styles.errorGeneral} role="alert">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
                aria-label="Send message to Veynt Labs"
              >
                {status === "sending" ? (
                  <>
                    <span className={styles.spinner} aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
