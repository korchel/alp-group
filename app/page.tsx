import { GreetingSection } from "../components/GreetingSection/GreetingSection";
import { Banner } from "../components/Banner/Banner";
import { Header } from "../components/Header";
import { DescriptionSection } from "../components/DescriptionSection/DescriptionSection";
import { GallerySection } from "../components/GallerySection/Gallery";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <GreetingSection />
        <DescriptionSection />
        <GallerySection />
      </main>
    </>
  );
};

export default HomePage;
