
import Hero from "./PageComponent/Hero/Hero";
import FeaturedProducts from "./PageComponent/FeaturedProducts/FeaturedProducts";
import PriceTable from "./PageComponent/PriceTable/PriceTable";
export default function Home() {
  return (
      <main>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
    <PriceTable></PriceTable>
    </main>
  );
}
