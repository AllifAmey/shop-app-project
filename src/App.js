import NavBar from "./components/layouts/Navbar/NavBar";

import ShopPage from "./components/pages/Shop/ShopPage";
import ProductInfoPage from "./components/pages/Product/ProductInfoPage";
import HomePage from "./components/pages/Home/HomePage";
import Footer from "./components/layouts/Footer/Footer";
import StoryPage from "./components/pages/OurStory/StoryPage";
import ContactPage from "./components/pages/ContactUs/ContactPage";
import FAQPage from "./components/pages/FAQ/FAQPage";
import AccountPageRouting from "./components/pages/Account/AccountPageRouting";
import CheckOutPage from "./components/pages/Checkout/CheckOutPage";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { shopTheme } from "./shopTheme";
import { AnimatePresence } from "framer-motion";
import CreateProduct from "./components/pages/Account/AdminCreateProductForm";

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
            <Route
              path="/account/:accessType"
              element={<AccountPageRouting />}
            />
            <Route
              path="/account/:accessType/create/product"
              element={<CreateProduct />}
            />
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
