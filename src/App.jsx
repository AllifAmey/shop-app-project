import { lazy, Suspense } from "react";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { shopTheme } from "./shopTheme";
import { AnimatePresence } from "framer-motion";
import RootLayout from "./RootLayout";
import ErrorPage from "./components/pages/Error/ErrorPage";

function App() {
  /* 
  Use react-helmet-async, it's the updated version of react-helmet to change web title. 
  https://www.freecodecamp.org/news/react-helmet-examples/
  
  https://www.youtube.com/watch?v=pTinipkJBcs&ab_channel=LesterFernandez - for animation. 

  // hover over to pop up. 
  // consider using Navlink to make it obvious what is active. 
  // consider using : in the path for the support page. 
  
  */

  const HomePage = lazy(() => import("./components/pages/Home/HomePage"));
  const ShopPage = lazy(() => import("./components/pages/Shop/ShopPage"));
  const ProductInfoPage = lazy(() =>
    import("./components/pages/Product/ProductInfoPage")
  );
  const AccountPageRouting = lazy(() =>
    import("./components/pages/Account/AccountPageRouting")
  );
  const StoryPage = lazy(() => import("./components/pages/OurStory/StoryPage"));
  const ContactPage = lazy(() =>
    import("./components/pages/ContactUs/ContactPage")
  );
  const FAQPage = lazy(() => import("./components/pages/FAQ/FAQPage"));
  const CheckOutPage = lazy(() =>
    import("./components/pages/Checkout/CheckOutPage")
  );
  const CreateProduct = lazy(() =>
    import("./components/pages/Account/AdminCreateProductForm")
  );

  // loader function works by getting the data before loading the element.
  //

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        {
          path: "/home",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <HomePage />
            </Suspense>
          ),
          async loader({ request, params }) {
            let { loader } = await import("./components/pages/Home/HomePage");
            return loader({ request, params });
          },
        },
        {
          path: "/shop",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ShopPage />
            </Suspense>
          ),
          async loader({ request, params }) {
            let { loader } = await import("./components/pages/Shop/ShopPage");
            return loader({ request, params });
          },
        },
        {
          path: "/story",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <StoryPage />
            </Suspense>
          ),
        },
        {
          path: "/checkout",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <CheckOutPage />
            </Suspense>
          ),
        },
        {
          path: "/support/faq",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <FAQPage />
            </Suspense>
          ),
        },
        {
          path: "/support/contact",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: "/account/:accessType",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <AccountPageRouting />
            </Suspense>
          ),
        },
        {
          path: "/account/:accessType/create/product",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <CreateProduct />
            </Suspense>
          ),
        },
        {
          path: "/product/:productId",
          element: (
            <Suspense fallback={<p>Loading...</p>}>
              <ProductInfoPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <ThemeProvider theme={shopTheme}>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
