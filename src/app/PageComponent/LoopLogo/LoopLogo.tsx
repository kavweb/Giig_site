"use client";
import React from "react";
import styles from "./loopLogoStyle.module.css"

const clients = [
  "/logos/client1.png",
  "/logos/client1.png",
  "/logos/client1.png",
  "/logos/client1.png",
  "/logos/client1.png",
  "/logos/client1.png",
];

const ClientsSection: React.FC = () => {
  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.clientsTitle}>کارخانه‌هایی که با ما همکاری دارند</h2>
      <div className={styles.logosWrapper}>
        <div className={styles.logosMarquee}>
          {clients.concat(clients).map((logo, index) => (
            <div className={styles.logoItem} key={index}>
              <img src={logo} alt={`client-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
