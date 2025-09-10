"use client";
import styles from "./FeaturedProductsStyle.module.css";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  link: string;
  alt: string;
}

export default function ProductCard({ image, link, alt }: ProductCardProps) {
  return (
    <div className={styles.imageWrapper}>
      <img
        className={styles.productImage}
        src={image}
        alt={alt}
        width={300}
        height={500}
      />
      <Link href={link} className={styles.imageButton}>
        مشاهده جزئیات
      </Link>
    </div>
  );
}
