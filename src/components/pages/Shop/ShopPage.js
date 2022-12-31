import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import imgPin from "../../assets/img/icons/pinCushion-icon.png";
import imgSrunchy from "../../assets/img/icons/scrunchies-icon.png";
import imgRing from "../../assets/img/icons/ring-icon.png";
import AnimatedPage from "../../utility/AnimatedPage";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { shopActions } from "../../../store";
import FiltersIcon from "./utility/FiltersIcon";
import _ from "lodash";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ShopPage() {
  /*

  Make the shopping button light grey.

  Product item title to be 12px.
  Make the product info button light grey as well. 
  */
  // backend call
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [catagoriesAllowed, setCatagoriesAllowed] = useState({});
  const dispatch = useDispatch();

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch("http://localhost:8000/api/shop/products/");
    const data = await response.json();

    let catagories = [];
    data.map((product) => {
      catagories.push(product.catagory);
    });
    const unique_catagories = _.uniq(catagories);
    let catagories_allowed = {};
    unique_catagories.map((catagory) => {
      catagories_allowed[catagory] = false;
    });
    setCatagoriesAllowed(catagories_allowed);
    setProducts(data);
    dispatch(shopActions.replaceShop(data));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

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
            height="100vh"
            width={0.8}
            gap={2}
            justifyContent="start"
            alignItems="start"
            xs={9}
          >
            {!isLoading &&
              products
                .filter((product) => {
                  console.log(product);
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
