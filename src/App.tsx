import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={"<Shop />"} />
        <Route path="shop/:id" element={"<ShopItem />"} />
        <Route path="*" element={"<NotFound />"} />
        <Route path="/404" element={"<NotFound />"} />
      </Routes>
    </div>
  );
};

export default App;
