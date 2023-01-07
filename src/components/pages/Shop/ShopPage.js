import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import AnimatedPage from "../../utility/AnimatedPage";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { shopActions } from "../../../store";
import FiltersIcon from "./utility/FiltersIcon";
import _ from "lodash";
import { getProducts } from "../../services/Internal_API/ShopAPI/Products/ProductsAPI";
import Pagination from "@mui/material/Pagination";

function ShopPage() {
  /*
  The way the logic works in general:
  There are two sides of the shop - filters on the left and products on right.
  left - 
  Each product has a catagory attached to its object.
  Filters are created based on how many unique values of catagory there are.
  Filters then allow for users to see or not to see the products with this catagory.
  right - 
  When data is grabbed from the product api,
  the product's values goes through to the product component,
  it is then this component that creates the product cards seen in the shop with all,
  of its functionality.
  */

  // backend call
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [catagoriesAllowed, setCatagoriesAllowed] = useState({});

  const dispatch = useDispatch();

  const fetchProductsHandler = useCallback(async () => {
    // grabs the product with getproduct api call
    getProducts(setIsLoading).then((data) => {
      // Goes through each data and pushes through catagory of each product
      let catagories = [];
      data.map((product) => {
        catagories.push(product.catagory);
      });
      // checks if they are unique using lodash's uniq function
      const unique_catagories = _.uniq(catagories);
      let catagories_allowed = {};
      // set them false by default so checkboxes are unchecked.
      unique_catagories.map((catagory) => {
        catagories_allowed[catagory] = false;
      });
      setCatagoriesAllowed(catagories_allowed);
      setProducts(data);
      dispatch(shopActions.replaceShop(data));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  // planned feature of enlarging the shop.

  // the filter system will remain untouched as it is deemed sufficient.
  // the resulting filtered list will then look at
  /*
  <Pagination count={10} shape="rounded" />
  */

  return (
    <>
      <AnimatedPage>
        <Grid
          container
          height="auto"
          width={1}
          justifyContent="center"
          margin="2rem 0 "
        >
          <FiltersIcon
            catagoriesAllowed={catagoriesAllowed}
            setCatagoriesAllowed={setCatagoriesAllowed}
          />

          <Grid
            item
            container
            width={0.8}
            gap={2}
            justifyContent="start"
            alignItems="start"
            xs={9}
            padding="0 0 48px 0"
          >
            {!isLoading &&
              products
                .filter((product) => {
                  if (!catagoriesAllowed[product.catagory]) {
                    return true;
                  } else {
                    return false;
                  }
                })
                .map((productItem) => {
                  return (
                    <ProductCard
                      key={`card${productItem.id}`}
                      type={`${productItem.name.toLowerCase()}`}
                      img={`${productItem.image_url}`}
                      price={`${productItem.price}`}
                      cardName={`card${productItem.id}`}
                      product={productItem}
                    ></ProductCard>
                  );
                })}

            {isLoading && (
              <CircularProgress size="25rem" sx={{ margin: "auto" }} />
            )}
          </Grid>
        </Grid>
      </AnimatedPage>
    </>
  );
}

export default ShopPage;
