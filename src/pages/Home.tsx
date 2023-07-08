import { BestSellers, Brands, Explore, Footer, Hero } from "../components";
import Cart from "../components/cart/Cart";
import ToggleNavbar from "../components/navbar/ToggleNavbar";

const Home = () => {
  return (
    <div>
      <Cart />
      <ToggleNavbar />
      <Hero />
      <Explore />
      <BestSellers />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
