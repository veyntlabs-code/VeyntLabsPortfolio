"use client";

import styles from "./Footer.module.css";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com/veyntlabs/?hl=en" },
  { label: "Email", href: "mailto:veyntlabs@gmail.com" },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Top */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/logo.png" alt="Veynt Labs Logo" width={80} height={80} className={styles.logoImage} />
            <p className={styles.tagline}>
              Digital experiences. Built with purpose.
            </p>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <p className={styles.linksHeading}>Navigation</p>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className={styles.links} aria-label="Social media links">
            <p className={styles.linksHeading}>Connect</p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Veynt Labs.
          </p>

        </div>
      </div>
    </footer>
  );
}
