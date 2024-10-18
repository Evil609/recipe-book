"/use-clint/"
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import NavBar from "./components/NavBar";
import ExploreSection from "./ExploreSection";
import FeaturedSection from "./FeaturedSection";
import HeroSection from "./HeroSection";
import RecipeSection from "./RecipeSection";
import { recipes } from "./data/recipes";
function Home() {
  return (
    <body className="bg-main">
      <NavBar /> 
      <HeroSection />
      <RecipeSection recipes={recipes} />
      <ExploreSection />
      <FeaturedSection recipes={recipes} />
      <JoinUs />
      <Footer />
    </body>
  );
}
export default Home