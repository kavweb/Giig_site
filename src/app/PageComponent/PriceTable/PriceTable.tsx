"use client";
import styles from "./priceTableStyle.module.css";
import {useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import React from 'react';


type Product = {
  id: number;
  name: string;
  size: string;
  weight: string;
  factory: string;
  price: number | null;
  unit: string;
  length: string;
  code: string;
};

export default function PriceTable() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filtered =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.name === selectedCategory);

  const getCurrentDateTime = () => {
    return new Date().toLocaleString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const toggleExpanded = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className={styles.priceSection}>
      <div className={styles.categoryBar}>
        <button
          className={`${styles.categoryBtn} ${selectedCategory === "all" ? styles.activeCategory : ""}`}
          onClick={() => setSelectedCategory("all")}
        >
          همه
        </button>
        <button
          className={`${styles.categoryBtn} ${selectedCategory === "میلگرد" ? styles.activeCategory : ""}`}
          onClick={() => setSelectedCategory("میلگرد")}
        >
          میلگرد
        </button>
        <button
          className={`${styles.categoryBtn} ${selectedCategory === "تیرآهن" ? styles.activeCategory : ""}`}
          onClick={() => setSelectedCategory("تیرآهن")}
        >
          تیرآهن
        </button>
      </div>

      <p className={styles.updatedAt}>⏱ آخرین دریافت اطلاعات: {getCurrentDateTime()}</p>

      <div className={styles.tableWrapper}>
        <table className={styles.tableDesktop}>
          <thead>
            <tr>
              <th>محصول</th>
              <th>سایز</th>
              <th>وزن شاخه</th>
              <th>کارخانه</th>
              <th>قیمت (تومان)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <React.Fragment key={p.id}>
                <tr className={styles.tableRow}>
                  <td>{p.name}</td>
                  <td>{p.size}</td>
                  <td>{p.weight}</td>
                  <td>{p.factory}</td>
                  <td>{p.price ? `${p.price} تومان` : "استعلام"}</td>
                  <td>
                    <button
                      className={`${styles.arrowBtn} ${expanded === p.id ? styles.expanded : ""}`}
                      onClick={() => toggleExpanded(p.id)}
                    >
                      ▼
                    </button>
                  </td>
                </tr>
                {expanded === p.id && (
                  <tr className={styles.moreInfoRow}>
                    <td colSpan={6}>
                      <div className={styles.moreInfo}>
                        <p>واحد: {p.unit}</p>
                        <p>طول شاخه: {p.length}</p>
                        <p>کد: {p.code}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>

        </table>

        <table className={styles.tableMobile}>
          <thead>
            <tr>
              <th>محصول و سایز</th>
              <th>کارخانه</th>
              <th>قیمت (تومان)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <React.Fragment key={p.id}>
                <tr className={styles.tableRow}>
                  <td>{`${p.name} ${p.size}`}</td>
                  <td>{p.factory}</td>
                  <td>{p.price ? `${p.price} تومان` : "استعلام"}</td>
                  <td>
                    <button
                      className={`${styles.arrowBtn} ${expanded === p.id ? styles.expanded : ""}`}
                      onClick={() => toggleExpanded(p.id)}
                    >
                      ▼
                    </button>
                  </td>
                </tr>
                {expanded === p.id && (
                  <tr className={styles.moreInfoRow}>
                    <td colSpan={4}>
                      <div className={styles.moreInfo}>
                        <p>وزن شاخه: {p.weight}</p>
                        <p>واحد: {p.unit}</p>
                        <p>طول شاخه: {p.length}</p>
                        <p>کد: {p.code}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
 