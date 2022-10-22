import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Hero />} />
        <Route path="product" element={<ProductCard />} />
      </Routes>
    </>
  );
}

export default App;
