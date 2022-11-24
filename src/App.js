import NavBar from "./components/NavBar";
import ShopPage from "./components/pages/ShopPage";
import ProductInfoPage from "./components/pages/ProductInfoPage";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/Footer";
import StoryPage from "./components/pages/StoryPage";
import ProductImage from "./components/ProductImage";
import ProductHomePage from "./components/ProductHomePage";
import ContactPage from "./components/pages/ContactPage";
import FAQPage from "./components/pages/FAQPage";
import AccountPage from "./components/pages/AccountPage";
import CheckOutPage from "./components/pages/CheckOutPage";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { shopTheme } from "./shopTheme";
import { AnimatePresence } from "framer-motion";

function App() {
  /* 
  Use react-helmet-async, it's the updated version of react-helmet to change web title. 
  https://www.freecodecamp.org/news/react-helmet-examples/
  
  https://www.youtube.com/watch?v=pTinipkJBcs&ab_channel=LesterFernandez - for animation. 

  // hover over to pop up. 
  // consider using Navlink to make it obvious what is active. 
  // consider using : in the path for the support page. 
  
  */
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={shopTheme}>
        <NavBar></NavBar>
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/account/:accessType" element={<AccountPage />} />
            <Route path="/test" element={<ProductImage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductInfoPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/support/faq" element={<FAQPage />} />
            <Route path="/support/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
