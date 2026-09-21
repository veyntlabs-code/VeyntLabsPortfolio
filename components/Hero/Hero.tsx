"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      // Animated orb gradient
      const cx = W / 2;
      const cy = H / 2 + Math.sin(t * 0.4) * 20;
      const r = Math.min(W, H) * 0.38;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, `rgba(170, 255, 0, ${0.10 + Math.sin(t * 0.5) * 0.03})`);
      grad.addColorStop(0.4, `rgba(100, 200, 0, ${0.05 + Math.sin(t * 0.3) * 0.02})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // V shape lines
      const vCx = W / 2;
      const vCy = H / 2;
      const vSize = Math.min(W, H) * 0.3;
      const pulse = 1 + Math.sin(t * 0.6) * 0.04;

      // Draw V
      ctx.beginPath();
      ctx.moveTo(vCx - vSize * 0.6 * pulse, vCy - vSize * 0.5 * pulse);
      ctx.lineTo(vCx, vCy + vSize * 0.5 * pulse);
      ctx.lineTo(vCx + vSize * 0.6 * pulse, vCy - vSize * 0.5 * pulse);

      const lineGrad = ctx.createLinearGradient(
        vCx - vSize * 0.6,
        vCy - vSize * 0.5,
        vCx + vSize * 0.6,
        vCy - vSize * 0.5
      );
      lineGrad.addColorStop(0, `rgba(170, 255, 0, ${0.2 + Math.sin(t * 0.4) * 0.1})`);
      lineGrad.addColorStop(0.5, `rgba(170, 255, 0, ${0.5 + Math.sin(t * 0.5) * 0.15})`);
      lineGrad.addColorStop(1, `rgba(170, 255, 0, ${0.2 + Math.sin(t * 0.4) * 0.1})`);

      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // Inner V (smaller, more opaque)
      const innerScale = 0.45;
      ctx.beginPath();
      ctx.moveTo(vCx - vSize * 0.6 * innerScale * pulse, vCy - vSize * 0.5 * innerScale * pulse);
      ctx.lineTo(vCx, vCy + vSize * 0.5 * innerScale * pulse);
      ctx.lineTo(vCx + vSize * 0.6 * innerScale * pulse, vCy - vSize * 0.5 * innerScale * pulse);

      const innerGrad = ctx.createLinearGradient(
        vCx - vSize * 0.3,
        vCy - vSize * 0.25,
        vCx + vSize * 0.3,
        vCy - vSize * 0.25
      );
      innerGrad.addColorStop(0, `rgba(170, 255, 0, ${0.08 + Math.sin(t * 0.6) * 0.04})`);
      innerGrad.addColorStop(0.5, `rgba(170, 255, 0, ${0.2 + Math.sin(t * 0.7) * 0.06})`);
      innerGrad.addColorStop(1, `rgba(170, 255, 0, ${0.08 + Math.sin(t * 0.6) * 0.04})`);

      ctx.strokeStyle = innerGrad;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Floating dots
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2 + t * 0.2;
        const dx = vCx + Math.cos(angle) * vSize * (0.7 + Math.sin(t * 0.3 + i) * 0.05);
        const dy = vCy + Math.sin(angle) * vSize * (0.35 + Math.sin(t * 0.4 + i) * 0.05);
        const dotR = 1.5 + Math.sin(t * 0.5 + i * 1.2) * 0.8;
        const dotOpacity = 0.3 + Math.sin(t * 0.4 + i) * 0.2;
        ctx.beginPath();
        ctx.arc(dx, dy, dotR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(170, 255, 0, ${dotOpacity})`;
        ctx.fill();
      }

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      draw();
    } else {
      // Static render for reduced motion
      t = 0;
      draw();
      cancelAnimationFrame(animId);
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero section">
      {/* Canvas visual */}
      <div className={styles.canvasWrapper} aria-hidden="true">
        <canvas ref={canvasRef} className={styles.canvas} />
      </div>

      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Noise texture */}
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <span className={styles.badgeDot} aria-hidden="true" />
          Digital Technology Company
        </motion.div>

        <motion.h1
          className={styles.headline}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
        >
          We build what
          <br />
          <span className={styles.headlineAccent}>businesses imagine.</span>
        </motion.h1>

        <motion.p
          className={styles.subtext}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          Veynt Labs creates modern digital experiences and solutions
          <br className={styles.breakpoint} />
          for businesses ready to move forward.
        </motion.p>

        <motion.div
          className={styles.ctaGroup}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          <button
            className={styles.ctaPrimary}
            onClick={() => handleScroll("#contact")}
            aria-label="Start a project with Veynt Labs"
          >
            Start a Project
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </button>
          <button
            className={styles.ctaSecondary}
            onClick={() => handleScroll("#contact")}
            aria-label="Get in touch with Veynt Labs"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-hidden="true"
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </motion.div>
    </section>
  );
}
