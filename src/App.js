import NavBar from "./components/NavBar";
import ShopPage from "./components/pages/ShopPage";
import ProductInfoPage from "./components/ProductInfoPage";
import HomePage from "./components/pages/HomePage";
import CheckoutPage from "./components/pages/CheckoutPage";
import StoryPage from "./components/pages/StoryPage";
import HelpPage from "./components/pages/HelpPage";
import Footer from "./components/Footer";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product-info" element={<ProductInfoPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
