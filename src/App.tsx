import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./pages/Shop";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./components/cart/Cart";
import WishList from "./components/wishlist/WishList";
import ToggleNavbar from "./components/navbar/ToggleNavbar";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductInfo />} />
        <Route path="/cart" element={"<Cart />"} />
        <Route path="*" element={"<NotFound />"} />
        <Route path="/404" element={"<NotFound />"} />
      </Routes>

      <Cart />
      <WishList />
      <ToggleNavbar />

      <ToastContainer
        autoClose={2000}
        limit={2}
        newestOnTop={true}
        closeOnClick
        hideProgressBar
      />
    </div>
  );
};

export default App;
