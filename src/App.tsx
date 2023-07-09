import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={"<Shop />"} />
        <Route path="/shop/:id" element={"<ProductInfo />"} />
        <Route path="/cart" element={"<Cart />"} />
        <Route path="*" element={"<NotFound />"} />
        <Route path="/404" element={"<NotFound />"} />
      </Routes>
      <ToastContainer
        autoClose={2000}
        limit={3}
        newestOnTop={true}
        closeOnClick
      />
    </div>
  );
};

export default App;
