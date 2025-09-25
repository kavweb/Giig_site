"use client";

import { useSearchParams } from "next/navigation";
import PriceTable from "../PriceTable/PriceTable";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "تیرآهن";

  return (
    <main style={{ padding: "20px" }}>
      <h1>لیست محصولات</h1>
      <PriceTable initialCategory={category} />
    </main>
  );
}
