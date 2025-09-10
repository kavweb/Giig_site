"use client";
import { useState } from "react";
import styles from "./headerstyle.module.css";
import Image from 'next/image'
import icons from '../../../../public/icon.webp'
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
       
        {/* دکمه موبایل */}
        <button
          className={styles.navToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
        >
          ☰
        </button>

        {/* منوی دسکتاپ */}
        <nav className={`${styles.nav} ${styles.navDesktop}`}>
          <a href="/">صفحه اصلی</a>
          <a href="/about">درباره ما</a>
          <a href="/products">محصولات</a>
        </nav>

        <div className={styles.headerLogo}>
          <a href="tel:/09200946065">تماس با ما</a>
          <Image
            className={styles.logoImg}
            src={icons}
            width={100}
            height={100}
            alt="Picture of the author"
          />
          
        </div>

      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <nav className={`${styles.nav} ${styles.navMobile}`}>
          <a href="/" onClick={() => setIsOpen(false)}>صفحه اصلی</a>
          <a href="/about" onClick={() => setIsOpen(false)}>درباره ما</a>
          <a href="/products" onClick={() => setIsOpen(false)}>محصولات</a>
        </nav>
      )}
    </header>
  );
}
