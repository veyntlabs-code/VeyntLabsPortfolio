"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import styles from "./About.module.css";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className={styles.about} ref={ref} aria-label="About Veynt Labs">
      <div className={styles.container}>
        <div className={styles.left}>
          <motion.p
            className={styles.label}
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            About Us
          </motion.p>
          <motion.h2
            className={styles.heading}
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Built for ideas
            <br />
            that deserve more.
          </motion.h2>
        </div>

        <div className={styles.right}>
          <motion.p
            className={styles.body}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Veynt Labs is a digital company focused on turning ideas into
            meaningful digital experiences. We combine creativity, technology,
            and a business-first mindset to build solutions that make a
            difference.
          </motion.p>

        </div>
      </div>

      {/* Decorative line */}
      <motion.div
        className={styles.line}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        aria-hidden="true"
      />
    </section>
  );
}
