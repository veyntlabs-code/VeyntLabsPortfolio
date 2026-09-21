"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./CTA.module.css";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.cta} ref={ref} aria-label="Call to action">
      <div className={styles.container}>
        <motion.p
          className={styles.smallHeading}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Have an idea?
        </motion.p>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Let&apos;s build it.
        </motion.h2>

        <motion.p
          className={styles.body}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether it&apos;s a website, product, automation, or something
          completely new—we&apos;d love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <button
            className={styles.btn}
            onClick={handleScroll}
            aria-label="Start a conversation with Veynt Labs"
          >
            Start a Conversation
            <span className={styles.btnArrow} aria-hidden="true">→</span>
          </button>
        </motion.div>
      </div>

      {/* Background accent */}
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
    </section>
  );
}
