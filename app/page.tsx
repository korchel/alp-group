import { GreetingSection } from "../components/GreetingSection/GreetingSection";
import { Banner } from "../components/Banner/Banner";
import { Header } from "../components/Header";
import { DescriptionSection } from "../components/DescriptionSection/DescriptionSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <GreetingSection />
        <DescriptionSection />
      </main>
    </>
  );
};

export default HomePage;
