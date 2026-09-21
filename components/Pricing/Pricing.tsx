"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Pricing.module.css";

const packages = [
  {
    id: "static",
    badge: "STATIC",
    priceText: "₹8,000",
    session: "/ project",
    title: "Static Website",
    descMain: "A clean, lightning-fast static website for a strong online presence without a complex backend.",
    features: [
      "Optimized for speed",
      "Fully responsive design",
      "Basic SEO setup",
      "Perfect for brochure sites"
    ]
  },
  {
    id: "dynamic",
    badge: "DYNAMIC",
    priceText: "₹15k–25k",
    session: "/ project",
    title: "Dynamic Website",
    descMain: "A custom, scalable website with more pages, forms, and business logic built around your workflow.",
    features: [
      "Custom business logic",
      "Content Management System",
      "Forms and integrations",
      "Advanced animations"
    ],
  },
  {
    id: "full",
    badge: "CUSTOM",
    priceText: "Custom",
    session: "/ requirement",
    title: "Full Project Build",
    descMain: "A complete website build depending on your unique requirements, design direction, and business goals.",
    features: [
      "End-to-end custom design",
      "Complex workflows",
      "Third-party integrations",
      "Dedicated support"
    ]
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className={styles.pricing} ref={ref} aria-label="Packages and Pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Pricing
          </motion.p>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Simple pricing.
            <br />
            No surprises.
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 + (i % 3) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Subtle hover glow effect */}
              <div className={styles.glow} aria-hidden="true" />
              
              <div className={styles.cardContent}>
                <div className={styles.badgeWrap}>
                  <span className={styles.badge}>{pkg.badge}</span>
                </div>

                <h3 className={styles.title}>{pkg.title}</h3>
                <p className={styles.desc}>{pkg.descMain}</p>

                <div className={styles.priceWrap}>
                  <span className={styles.price}>{pkg.priceText}</span>
                  <span className={styles.session}>{pkg.session}</span>
                </div>

                <div className={styles.divider} />

                <ul className={styles.featureList}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <svg
                        className={styles.checkIcon}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={styles.actionBtn} onClick={handleContact}>
                  Start Project
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
