"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./BrandStatement.module.css";

const words = ["Ideas", "Design", "Technology", "Impact"];

export default function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.brand} ref={ref} aria-label="Veynt Labs brand statement">
      <div className={styles.container}>
        <div className={styles.flow} role="presentation">
          {words.map((word, i) => (
            <div key={word} className={styles.wordGroup}>
              <motion.span
                className={styles.word}
                initial={{ opacity: 0, y: 48 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: i * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
              {i < words.length - 1 && (
                <motion.span
                  className={styles.arrow}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.18 + 0.3,
                    ease: "backOut",
                  }}
                  aria-hidden="true"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
