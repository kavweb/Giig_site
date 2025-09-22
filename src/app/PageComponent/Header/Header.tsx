"use client";
import { useState, useEffect } from "react";
import styles from "./headerStyle.module.css";
import Image from 'next/image'
import icons from '../../../../public/icon.webp'
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* دکمه موبایل */}
        <button
          className={styles.navToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
        >
          |||
        </button>

        {/* منوی دسکتاپ */}
        <nav className={`${styles.nav} ${styles.navDesktop}`}>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/products">محصولات</Link>
          <Link href="/about">درباره ما</Link>
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
          <Link href="/" onClick={() => setIsOpen(false)}>صفحه اصلی</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>درباره ما</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>محصولات</Link>
        </nav>
      )}
    </header>
  );
}
 