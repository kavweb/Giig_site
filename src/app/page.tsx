
import Hero from "./PageComponent/Hero/Hero";
import FeaturedProducts from "./PageComponent/FeaturedProducts/FeaturedProducts";
import PriceTable from "./PriceTable/PriceTable";
import AboutSlide from "./PageComponent/AboutSlider/AboutSlider"
import LoopLogo from "./PageComponent/LoopLogo/LoopLogo";

export default function Home() {
  return (
      <main>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <PriceTable initialCategory="تیرآهن"></PriceTable>
      <AboutSlide></AboutSlide>
      <LoopLogo></LoopLogo>
    </main>

  );
}
