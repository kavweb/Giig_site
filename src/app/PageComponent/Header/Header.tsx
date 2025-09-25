"use client";
import { useState, useEffect } from "react";
import styles from "./headerStyle.module.css";
import Image from "next/image";
import icons from "../../../../public/icon.webp";
import Link from "next/link";

const categories = [
  { name: "تیرآهن", slug: "tiran" },
  { name: "میلگرد", slug: "milgard" },
  { name: "پروفیل", slug: "profile" },
  { name: "ورق فولادی", slug: "varagh" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
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
          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <span className={styles.dropdownToggle}>محصولات ▾</span>
            {isProductsOpen && (
              <div className={styles.dropdownMenu}>
                {categories.map((cat) => (
                  <Link key={cat.slug} href={`/products/${cat.slug}`}>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about">درباره ما</Link>
        </nav>

        {/* لوگو و تماس */}
        <div className={styles.headerLogo}>
          <a href="tel:/09200946065">تماس با ما</a>
          <Image
            className={styles.logoImg}
            src={icons}
            width={100}
            height={100}
            alt="Giig Invest Logo"
          />
        </div>
      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <nav className={`${styles.nav} ${styles.navMobile}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            صفحه اصلی
          </Link>

          {/* محصولات در موبایل */}
          <details className={styles.mobileDropdown}>
            <summary>محصولات</summary>
            <div className={styles.mobileDropdownMenu}>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  onClick={() => setIsOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            درباره ما
          </Link>
        </nav>
      )}
    </header>
  );
}
