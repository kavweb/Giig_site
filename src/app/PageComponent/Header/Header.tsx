"use client";
import { useState } from "react";
import "./header.style.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
       
        {/* دکمه موبایل */}
        <button
          className="nav__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="منو"
        >
          ☰
        </button>

        {/* منوی دسکتاپ */}
        <nav className="nav nav--desktop">
          <a href="/">صفحه اصلی</a>
          <a href="/about">درباره ما</a>
          <a href="/products">محصولات</a>
        </nav>

        <div className="header__logo">Giig Invest</div>

      </div>

      {/* منوی موبایل */}
      {isOpen && (
        <nav className="nav nav--mobile">
          <a href="/" onClick={() => setIsOpen(false)}>صفحه اصلی</a>
          <a href="/about" onClick={() => setIsOpen(false)}>درباره ما</a>
          <a href="/products" onClick={() => setIsOpen(false)}>محصولات</a>
        </nav>
      )}
    </header>
  );
}
