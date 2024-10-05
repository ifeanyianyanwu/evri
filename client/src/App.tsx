// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Shop from "./pages/Shop";
// import ProductInfo from "./pages/ProductInfo/ProductInfo";
// import Cart from "./components/cart/Cart";
// import WishList from "./components/wishlist/WishList";
// import ToggleNavbar from "./components/navbar/ToggleNavbar";
// import NotFound from "./pages/NotFound";
import UnderConstruction from "./assets/undraw_under_construction_-46-pa.svg";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-8 px-6 py-12">
      <h1 className="text-xl font-semibold">Site Under Construction</h1>
      <div className="max-w-lg">
        <img
          src={UnderConstruction}
          alt="Under Construction"
          className="max-w-full h-auto"
        />
      </div>
    </div>
    // <div className="min-h-screen overflow-x-hidden">
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/shop" element={<Shop />} />
    //     <Route path="/shop/:id" element={<ProductInfo />} />
    //     <Route path="*" element={<NotFound />} />
    //     <Route path="/404" element={<NotFound />} />
    //   </Routes>

    //   <Cart />
    //   <WishList />
    //   <ToggleNavbar />

    //   <ToastContainer
    //     autoClose={2000}
    //     limit={2}
    //     newestOnTop={true}
    //     closeOnClick
    //     hideProgressBar
    //     position="top-left"
    //   />
    // </div>
  );
};

export default App;
