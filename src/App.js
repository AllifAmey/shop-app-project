import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import ProductBox from "./components/ProductBox";
import InfoBox from "./components/InfoBox";
import Hero from "./components/Hero";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Hero />} />
        <Route path="product" element={<ProductBox />} />
        <Route path="/product-description" element={<InfoBox />} />
      </Routes>
    </>
  );
}

export default App;
