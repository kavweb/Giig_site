"use client";
import React, { useState } from 'react';
import styles from "./expressStyle.module.css";
import Image from "next/image";
export default function ExpertsSection() {
  const experts = [
    {
      name: "آقای قاسمی",
      role: "مدیر فروش",
      phone: "0912xxxxxxx",
      whatsapp: "https://wa.me/98912xxxxxxx",
      image: "/public/person.png", // مسیر عکس
    },
    {
      name: "محمدمهدی زارع",
      role: "کارشناس فروش",
      phone: "0915xxxxxxx",
      whatsapp: "https://wa.me/98915xxxxxxx",
      image: "/public/person.png",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>ارتباط مستقیم با کارشناسان فروش</h2>
        <p>
          برای مشاوره، استعلام قیمت و ثبت سفارش، با کارشناسان ما در تماس باشید.
        </p>
      </div>

      <div className={styles.grid}>
        {experts.map((expert, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src={expert.image}
                alt={expert.name}
                width={120}
                height={120}
              />
            </div>
            <h3>{expert.name}</h3>
            <p className={styles.role}>{expert.role}</p>

            <div className={styles.actions}>
              <a href={`tel:${expert.phone}`} className={styles.callBtn}>
                📞 تماس
              </a>
              <a
                href={expert.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                💬 واتساپ
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
