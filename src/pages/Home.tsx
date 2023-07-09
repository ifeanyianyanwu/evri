import { BestSellers, Brands, Explore, Footer, Hero } from "../components";
import Cart from "../components/cart/Cart";
import ToggleNavbar from "../components/navbar/ToggleNavbar";
import WishList from "../components/wishlist/WishList";

const Home = () => {
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
