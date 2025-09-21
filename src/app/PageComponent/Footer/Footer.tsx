"use client";
import styles from "./footerStyle.module.css";
import Logo from "../../../../public/icon.webp"; // لوگوی خودتون

import Image from "next/image";
import { FaWhatsapp, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* ستون اول - لوگو و معرفی */}
        <div className={styles.column}>
          <Image src={Logo} alt="Giig Invest Logo" width={120} height={120} />
          <p className={styles.desc}>
            تامین‌کننده مطمئن تیرآهن و ملزومات فولادی در مشهد و سراسر کشور.
          </p>
          {/* شبکه‌های اجتماعی */}
          <div className={styles.socials}>
            <a href="https://wa.me/989200946965" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://t.me/giig_investment" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
            <a href="https://www.instagram.com/giig_invest" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            {/* <a href="https://www.linkedin.com/company/giiginvest" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> */}
          </div>
        </div>

        {/* ستون دوم - لینک‌های سریع */}
        <div className={styles.column}>
          <h4>دسترسی سریع</h4>
          <ul>
            <li><a href="#about">درباره ما</a></li>
            <li><a href="#products">محصولات</a></li>
            <li><a href="#prices">لیست قیمت</a></li>
            <li><a href="#contact">تماس با ما</a></li>
          </ul>
        </div>

        {/* ستون سوم - تماس */}
        <div className={styles.column}>
          <h4>ارتباط با ما</h4>
          <p> 09151234567 (کارشناس فروش)</p>
          <p> 0915-987-6543 (مدیریت)</p>
        </div>
      </div>

      {/* خط جداکننده پایین */}
      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} گروه صنعتی و سرمایه‌گذاری قاسمی. همه حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}
