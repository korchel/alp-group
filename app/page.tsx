import { GreetingSection } from "../components/GreetingSection/GreetingSection";
import { Banner } from "../components/Banner/Banner";
import { Header } from "../components/Header";
import { DescriptionSection } from "../components/DescriptionSection/DescriptionSection";
import { GallerySection } from "../components/GallerySection/Gallery";
import { FormSection } from "../components/FormSection/FormSection";
import { Footer } from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <GreetingSection />
        <DescriptionSection />
        <GallerySection />
        <FormSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
