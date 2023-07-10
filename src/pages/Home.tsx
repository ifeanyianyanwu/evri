import { useEffect } from "react";
import { BestSellers, Brands, Explore, Footer, Hero } from "../components";
import Cart from "../components/cart/Cart";
import ToggleNavbar from "../components/navbar/ToggleNavbar";
import WishList from "../components/wishlist/WishList";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Cart />
      <WishList />
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
