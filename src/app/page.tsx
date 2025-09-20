
import Hero from "./PageComponent/Hero/Hero";
import FeaturedProducts from "./PageComponent/FeaturedProducts/FeaturedProducts";
import PriceTable from "./PageComponent/PriceTable/PriceTable";
import AboutSlide from "./PageComponent/AboutSlider/AboutSlider"

export default function Home() {
  return (
      <main>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <PriceTable></PriceTable>
      <AboutSlide></AboutSlide>
    </main>

  );
}
