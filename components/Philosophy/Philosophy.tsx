"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Philosophy.module.css";

const principles = [
  {
    number: "01",
    title: "Simplicity",
    desc: "Remove the unnecessary.",
  },
  {
    number: "02",
    title: "Creativity",
    desc: "Challenge the obvious.",
  },
  {
    number: "03",
    title: "Purpose",
    desc: "Build with intention.",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.philosophy} ref={ref} aria-label="Veynt Labs Philosophy">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Philosophy
          </motion.p>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Think different.
            <br />
            Build better.
          </motion.h2>
        </div>

        <div className={styles.principles}>
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              className={styles.principle}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.number} aria-hidden="true">{p.number}</div>
              <div className={styles.divider} aria-hidden="true" />
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
