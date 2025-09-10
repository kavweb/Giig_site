"use client";
import styles from "./FeaturedProductsStyle.module.css";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "فندانسیون",
      description: "میلگرد با کیفیت بالا مناسب برای سازه‌های بتنی",
      category: "پرفروش",
      image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_bunch_of_rebar.jpg/1280px-A_bunch_of_rebar.jpg",
      btn1: "/milgerd",
      image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_bunch_of_rebar.jpg/1280px-A_bunch_of_rebar.jpg",
      btn2: "/milgerd",
    },
    {
      id: 2,
      name: "اسکلت",
      description: "میلگرد با کیفیت بالا میلورمسیبکمنتشیب بتنی",
      category: "پرفروش",
      image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_bunch_of_rebar.jpg/1280px-A_bunch_of_rebar.jpg",
      btn1: "/milgerd",
      image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_bunch_of_rebar.jpg/1280px-A_bunch_of_rebar.jpg",
      btn2: "/milgerd",
    },
    {
      id: 3,
      name: "طرح‌های دیگر",
      description: "میلگرد با کیفیت بالا بالا بالا تر از هر بالا بالا تر مناسب برای پروژه‌های خاص",
      category: "ویژه",
      image1: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_bunch_of_rebar.jpg/1280px-A_bunch_of_rebar.jpg",
      btn1: "/milgerd",
      image2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_bunch_of_rebar.jpg/1280px-A_bunch_of_rebar.jpg",
      btn2: "/milgerd",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentIndex];

  return (
    <section className={styles.featuredSection}>
      <div className={styles.sectionContainer}>
        <div className={styles.textColumn}>
          <h2 className={styles.sectionTitle}>{currentProduct.name}</h2>
          <p className={styles.sectionDescription}>
            {currentProduct.description}
          </p>
          <p className={styles.sectionCategory}>
            دسته‌بندی: {currentProduct.category}
          </p>
        </div>
        <div className={styles.imageColumn}>
          <ProductCard
            image={currentProduct.image1}
            link={currentProduct.btn1}
            alt={`${currentProduct.name} - تصویر اول`}
          />
          <ProductCard
            image={currentProduct.image2}
            link={currentProduct.btn2}
            alt={`${currentProduct.name} - تصویر دوم`}
          />
        </div>
      </div>
    </section>
  );
}
