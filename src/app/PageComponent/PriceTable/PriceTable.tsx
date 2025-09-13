"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient"; // مسیر نسبت به کامپوننتت

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

  if (loading) return <p>در حال بارگذاری...</p>;
console.log(products)
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.size} - {p.price ? `${p.price} تومان` : "استعلام"}
        </div>
      ))}
    </div>
  );
}



// "use client";
// import { useState, useEffect } from "react";
// import styles from "./priceTableStyle.module.css";

// type Product = {
//   id: number;
//   name: string;
//   size: string;
//   weight: string;
//   factory: string;
//   price: string | null; // null = ناموجود یا استعلام
//   unit: string;
//   length: string;
//   code: string;
// };

// const products: Product[] = [
//   {
//     id: 1,
//     name: "میلگرد",
//     size: "16",
//     weight: "18kg",
//     factory: "ذوب آهن",
//     price: "28,500",
//     unit: "کیلوگرم",
//     length: "12m",
//     code: "A101",
//   },
//   {
//     id: 2,
//     name: "تیرآهن",
//     size: "20",
//     weight: "150kg",
//     factory: "فولاد خراسان",
//     price: null,
//     unit: "شاخه",
//     length: "12m",
//     code: "T220",
//   }

// ];

// export default function PriceTable() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [expanded, setExpanded] = useState<number | null>(null); // فقط یک ردیف باز باشه

//   const filtered =
//     selectedCategory === "all"
//       ? products
//       : products.filter((p) => p.name === selectedCategory);

//   // تاریخ پویا
//   const getCurrentDateTime = () => {
//     return new Date().toLocaleString("fa-IR", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const toggleExpanded = (id: number) => {
//     setExpanded(expanded === id ? null : id); // فقط ردیف انتخاب‌شده باز/بسته بشه
//   };

//   return (
//     <section className={styles.priceSection}>
//       {/* دسته‌بندی */}
//       <div className={styles.categoryBar}>
//         <button
//           className={`${styles.categoryBtn} ${selectedCategory === "all" ? styles.activeCategory : ""}`}
//           onClick={() => setSelectedCategory("all")}
//         >
//           همه
//         </button>
//         <button
//           className={`${styles.categoryBtn} ${selectedCategory === "میلگرد" ? styles.activeCategory : ""}`}
//           onClick={() => setSelectedCategory("میلگرد")}
//         >
//           میلگرد
//         </button>
//         <button
//           className={`${styles.categoryBtn} ${selectedCategory === "تیرآهن" ? styles.activeCategory : ""}`}
//           onClick={() => setSelectedCategory("تیرآهن")}
//         >
//           تیرآهن
//         </button>
//       </div>

//       {/* آخرین بروزرسانی */}
//       <p className={styles.updatedAt}>⏱ آخرین بروزرسانی: {getCurrentDateTime()}</p>

//       {/* جدول */}
//       <div className={styles.tableWrapper}>
//         <table className={styles.tableDesktop}>
//           <thead>
//             <tr>
//               <th>محصول</th>
//               <th>سایز</th>
//               <th>وزن شاخه</th>
//               <th>کارخانه</th>
//               <th>قیمت (تومان)</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map((p) => (
//               <tr key={p.id} className={styles.tableRow}>
//                 <td>{p.name}</td>
//                 <td>{p.size}</td>
//                 <td>{p.weight}</td>
//                 <td>{p.factory}</td>
//                 <td>{p.price ? `${p.price} تومان` : "استعلام"}</td>
//                 <td>
//                   <button
//                     className={styles.moreBtn}
//                     onClick={() => toggleExpanded(p.id)}
//                   >
//                     ⋮
//                   </button>
//                   {expanded === p.id && (
//                     <div className={styles.moreInfo}>
//                       <p>واحد: {p.unit}</p>
//                       <p>طول شاخه: {p.length}</p>
//                       <p>کد: {p.code}</p>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* موبایل */}
//         <div className={styles.tableMobile}>
//           {filtered.map((p) => (
//             <div key={p.id} className={styles.mobileRow}>
//               <div className={styles.mobileContent}>
//                 <strong>
//                   {p.name} - {p.size}
//                 </strong>
//                 <p>{p.factory}</p>
//               </div>
//               <div className={styles.mobilePrice}>
//                 {p.price ? `${p.price} تومان` : "استعلام"}
//               </div>
//               <button
//                 className={styles.moreBtn}
//                 onClick={() => toggleExpanded(p.id)}
//               >
//                 ⋮
//               </button>
//               {expanded === p.id && (
//                 <div className={styles.moreInfo}>
//                   <p>وزن شاخه: {p.weight}</p>
//                   <p>واحد: {p.unit}</p>
//                   <p>طول شاخه: {p.length}</p>
//                   <p>کد: {p.code}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }