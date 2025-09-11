"use client";
import styles from "./FeaturedProductsStyle.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FeaturedProducts() {
    const products = [
        { id: 1, name: "میلاد با سعادت میلگرد های در تصویر مبارک باد", description: "میلگرد با کیفیت بالا مناسب برای سازه‌های بتنی", category: "پرفروش",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/A_bunch_of_rebar.jpg", btn: "/milgerd" },
        { id: 2, name: "اسکلت", description: "مقاوم و استاندارد برای اسکلت فلزی", category: "محبوب",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/A_bunch_of_rebar.jpg", btn: "/milgerd" },
        { id: 3, name: "طرح های دیگر", description: "میلگرد مناسب انواع پروژه‌های ساختمانی", category: "ویژه",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/A_bunch_of_rebar.jpg", btn: "/milgerd" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % products.length);
                setAnimate(false);
            }, 600); // باید با زمان انیمیشن هماهنگ باشه
        }, 5000);
        return () => clearInterval(interval);
    }, [products.length]);

    const currentProduct = products[currentIndex];

    return (
        <section className={styles.featuredSection}>
            <div className={`${styles.sectionContainer} ${animate ? styles.animate : ""}`}>
                <div className={styles.textColumn}>
                    <h1 className={styles.sectionTitle}>{currentProduct.name}</h1>
                    <p className={styles.sectionDescription}>{currentProduct.description}</p>
                </div>
                <div className={styles.imageColumn}>
                    <Link href={currentProduct.btn}>
                    
                    <img
                        className={styles.productImage}
                        src={currentProduct.image}
                        alt={currentProduct.name}
                        width={300}
                        height={480}
                    />
                    <div className={styles.imageButton}>
                        رفتن به صفحه
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
