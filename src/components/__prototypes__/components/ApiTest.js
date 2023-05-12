import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "../../pages/Shop/ProductCard";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function ApiTest() {
  /*

  Make the shopping button light grey.

  Product item title to be 12px.
  Make the product info button light grey as well. 
  */
  // backend call
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch("http://localhost:8000/api/shop/products/");
    const data = await response.json();

    setProducts(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  function shop() {
    console.log(products);
    console.log(
      products.map((productItem) => {
        console.log(productItem);
        console.log(productItem.id);
        console.log(productItem.name);
        console.log(productItem.image_url);
        console.log(productItem.price);
      })
    );
  }

  /*
  referance

  {Object.keys(shop)
              .filter((cardName) => {
                console.log(shop[cardName].type.replace(/\s/g, ""));
                console.log(filters[shop[cardName].type.replace(/\s/g, "")]);
                if (filters[shop[cardName].type.replace(/\s/g, "")]) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((cardName) => {
                return (
                  <ProductCard
                    key={cardName}
                    type={shop[cardName].type.toLowerCase()}
                    img={shop[cardName].img}
                    price={`£  ${shop[cardName].price.toString()}`}
                    cardName={cardName}
                  ></ProductCard>
                );
              })}

    products.map((productItem) => {
            return (
              <ProductCard
                key={`card${productItem.id}}`}
                type={`${productItem.name.type.toLowerCase()}`}
                img={`${productItem.image_url}`}
                price={`${productItem.price}`}
                cardName={`card${productItem.id}`}
              ></ProductCard>
            );
          })

  */

  // functions and consts

  return (
    <>
      <Grid
        container
        height="auto"
        width={1}
        justifyContent="center"
        margin="2rem 0 "
        gap={5}
      >
        <Grid item xs={3}>
          <Button onClick={shop}>Click a me to see da shop</Button>
        </Grid>
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
          {
            <ProductCard
              type="banana"
              img=""
              price="price"
              cardName="banana"
            ></ProductCard>
          }
        </Grid>
      </Grid>
    </>
  );
}

export default ApiTest;
