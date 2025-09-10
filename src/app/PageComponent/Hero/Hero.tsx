"use client";

import styles from "./heroStyle.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          تأمین‌کننده تخصصی تیرآهن و ملزومات فلزی در مشهد
        </h1>
        <p className={styles.subtitle}>
          همراه مطمئن سازندگان و کارخانه‌داران
        </p>
        <button className={styles.cta}>مشاهده محصولات</button>
      </div>
    </section>
  );
}
