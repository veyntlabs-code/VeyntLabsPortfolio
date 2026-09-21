"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Pricing.module.css";

const packages = [
  {
    id: "static",
    badge: "WEBSITE DEVELOPMENT",
    code: "00 / WEBSITE DEVELOPMENT",
    priceText: "₹8,000",
    session: " / SESSION",
    priceDesc: "₹8,000",
    title: "Static Website",
    descMain:
      "A clean, fast, and professional static website for a business that needs a strong online presence without a complex backend.",
    descSub:
      "Best for brochure sites and essential business info. Custom functionality may move this higher based on scope.",
  },
  {
    id: "dynamic",
    badge: "WEBSITE DEVELOPMENT",
    code: "00 / WEBSITE DEVELOPMENT",
    priceText: "₹40,000 – ₹50,000",
    session: " / SESSION",
    priceDesc: "₹40,000 – ₹50,000",
    title: "Dynamic Website",
    descMain:
      "A custom, scalable website with more pages, sections, forms, and business logic built around your real workflow.",
    descSub:
      "This is where features, integrations, and more complex pages increase the project value.",
  },
  {
    id: "full",
    badge: "WEBSITE DEVELOPMENT",
    code: "00 / WEBSITE DEVELOPMENT",
    priceText: "Depends on\nrequirement",
    session: " / SESSION",
    priceDesc: "DEPENDS ON\nREQUIREMENT",
    title: "Full Project Build",
    descMain:
      "A complete website build depending on your requirements, pages, features, design direction, and business goals.",
    descSub:
      "Every full project is custom. The final budget depends on your needs, content, and functionality.",
  },
  {
    id: "social",
    badge: "MARKETING",
    code: "00 / MARKETING",
    priceText: "₹10,000/month",
    session: " / SESSION",
    priceDesc: "₹10,000/MONTH",
    title: "Social Media Handling",
    descMain:
      "Monthly social media planning, posting, engagement, and campaign support to keep your brand active and relevant.",
    descSub:
      "A steady monthly package for brand visibility and community building.",
  },
  {
    id: "reels",
    badge: "MARKETING",
    code: "00 / MARKETING",
    priceText: "₹20,000/month",
    session: " / SESSION",
    priceDesc: "₹20,000/MONTH",
    title: "Reels + Content Handling",
    descMain:
      "Reels shooting, editing, content production, and social media handling from concept to publishing.",
    descSub:
      "This covers short-form video content, story execution, and consistent digital presence.",
  },
  {
    id: "branding",
    badge: "BRANDING",
    code: "00 / BRANDING",
    priceText: "Depends on\nrequirement",
    session: " / SESSION",
    priceDesc: "DEPENDS ON REQUIREMENT",
    title: "Branding + Website Setup",
    descMain:
      "Logo creation, end-to-end branding, menu design, website setup, and a full visual identity tailored to your business.",
    descSub:
      "This depends on the final requirement, design depth, and the number of assets needed.",
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handlePayNow = (e: React.MouseEvent) => {
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
            Packages
          </motion.p>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transparent pricing.
            <br />
            Premium delivery.
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
                delay: 0.15 + (i % 3) * 0.1, // Stagger rows slightly
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Top Banner (Abstract grid instead of image) */}
              <div className={styles.cardBanner}>
                <div className={styles.bannerGrid} aria-hidden="true" />
                <div className={styles.badgeRow}>
                  <div className={styles.badge}>
                    <span className={styles.dot} />
                    {pkg.badge}
                  </div>
                  <span className={styles.sysOk}>SYS.OK</span>
                </div>
              </div>

              {/* Main Content */}
              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.metaCode}>{pkg.code}</span>
                  <span className={styles.metaPrice}>{pkg.priceDesc}</span>
                </div>

                <h3 className={styles.title}>{pkg.title}</h3>

                <div className={styles.priceHighlight}>
                  <div className={styles.priceHighlightBar} />
                  <div className={styles.priceHighlightText}>
                    <span className={styles.priceMain}>{pkg.priceText}</span>
                    <span className={styles.session}>{pkg.session}</span>
                  </div>
                </div>

                <div className={styles.descBlock}>
                  <p className={styles.descMain}>{pkg.descMain}</p>
                  <p className={styles.descSub}>{pkg.descSub}</p>
                </div>

                {/* Divider with dot */}
                <div className={styles.dividerWrap}>
                  <div className={styles.dividerLine} />
                  <div className={styles.dividerDot} />
                  <div className={styles.dividerLine} />
                </div>

                <button className={styles.payBtn} onClick={handlePayNow}>
                  PAY NOW
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
