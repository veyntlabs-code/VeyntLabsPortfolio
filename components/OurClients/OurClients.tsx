"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./OurClients.module.css";

const clients = [
  {
    id: "axal",
    name: "AXAL Precision Packaging",
    description: "Engineered for absolute clarity and industrial durability. AXAL provides high quality packing materials for businesses.",
    image: "/client-axal.png",
    url: "https://axalpack.in/"
  },
  {
    id: "royal-uzhavan",
    name: "Royal Uzhavan",
    description: "Quality Feed, Healthy Animals. A homegrown agricultural and animal nutrition company producing reliable feed for farmers and livestock.",
    image: "/client-royal.png",
    url: "https://www.royaluzhavan.in/"
  }
];

export default function OurClients() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="clients" className={styles.clients} ref={ref} aria-label="Our Clients">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Clients
          </motion.p>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work we&apos;re proud of.
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {clients.map((client, i) => (
            <motion.a
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              key={client.id}
              className={styles.card}
              style={{ textDecoration: 'none', color: 'inherit' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className={styles.imageWrap}>
                {/* Fallback to simple div if image is not yet placed in public folder */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className={styles.image} 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add(styles.imagePlaceholder);
                  }} 
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{client.name}</h3>
                <p className={styles.cardDesc}>{client.description}</p>
              </div>
              <div className={styles.cardGlow} aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
