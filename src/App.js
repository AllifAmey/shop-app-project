import NavBar from "./components/NavBar";
import NavBarNew from "./components/NavBarNew";
import ShopPage from "./components/pages/ShopPage";
import ProductInfoPage from "./components/pages/ProductInfoPage";
import HomePage from "./components/pages/HomePage";
import CheckoutPage from "./components/pages/CheckoutPage";
import StoryPage from "./components/pages/StoryPage";
import HelpPage from "./components/pages/HelpPage";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { shopTheme } from "./shopTheme";

function App() {
  /* 
  Use react-helmet-async, it's the updated version of react-helmet to change web title. 
  https://www.freecodecamp.org/news/react-helmet-examples/
  
  */
  return (
    <>
      <NavBarNew></NavBarNew>
      <ThemeProvider theme={shopTheme}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product-info" element={<ProductInfoPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/support/faq" element={<HelpPage />} />
          <Route path="/support/contact" element={<ContactPage />} />
        </Routes>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
