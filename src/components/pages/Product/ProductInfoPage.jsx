import { Suspense } from "react";
import { useLoaderData, json, Await, defer } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import domain from "../../services/domain";
import { useOutletContext } from "react-router-dom";

import ProductDetailDesktop from "./ProductDetailDesktop";
import ProductDetailTablet from "./ProductDetailTablet";
import ProductDetailMobile from "./ProductDetailMobile";

import { Helmet } from "react-helmet-async";

function ProductInfoPage() {
  /*
   docs: 
    Vision:
    Left 60% - product image.
    Right 40% - product info
    
    Right section:
    Title big letters
    detail  medium letters
    detail - cold description :
    1. Size
    2. Materials.
    description : 

    marketing description - use lorem ipsum as placeholder.

    price small letters 

  
  
  Referance to this component can be seen in the route. 
  It is directed when the user presses the "buy now" button . 

  The way this works is the product id is grabbed from the url,
  then that product id is used fetch that specific product's information.
  It is then this product's information that is used to display the information in the ,
  ProductInfoPage
  
  */

  const { productDetail } = useLoaderData();

  const context = useOutletContext();

  return (
    <>
      <Suspense
        fallback={
          <CircularProgress
            size="25rem"
            sx={{ margin: "auto" }}
          ></CircularProgress>
        }
      >
        <Await resolve={productDetail}>
          {(loadedProductDetail) => (
            <>
              <Helmet>
                <title>
                  Handmade {`${loadedProductDetail.name.toLowerCase()}`}
                </title>
                <meta
                  name="description"
                  content={`Learn more about our handmade ${loadedProductDetail.name.toLowerCase()} at UniqueShopGB`}
                />
                <link
                  rel="canonical"
                  href={`/product/handmade-${loadedProductDetail.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}-${loadedProductDetail.id}`}
                />
              </Helmet>
              {context.isDesktop && (
                <ProductDetailDesktop product={loadedProductDetail} />
              )}
              {context.isTablet && (
                <ProductDetailTablet product={loadedProductDetail} />
              )}
              {context.isMobile && (
                <ProductDetailMobile product={loadedProductDetail} />
              )}
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default ProductInfoPage;

async function loadProductDetail(product_id) {
  const response = await fetch(`${domain}/api/shop/products/${product_id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  if (!response.ok) {
    throw json(
      { message: "Could not fetch products" },
      { status: response.status }
    );
  } else {
    const data = await response.json();
    return { ...data, id: product_id };
  }
}

export function loader({ params, request }) {
  const product_id = Number(
    params.productId.slice(
      params.productId.lastIndexOf("-") + 1,
      params.productId.length
    )
  );
  return defer({
    productDetail: loadProductDetail(product_id),
  });
}
