import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import AnimatedPage from "../../utility/AnimatedPage";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { shopActions } from "../../../store";
import FiltersIcon from "./utility/FiltersIcon";
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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [catagoriesAllowed, setCatagoriesAllowed] = useState({});
  const [page, setPage] = React.useState(1);
  const [pagination, setPagination] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  const dispatch = useDispatch();

  const fetchProductsHandler = useCallback(async () => {
    // grabs the product with getproduct api call
    getProducts(setIsLoading).then((data) => {
      // set them false by default so checkboxes are unchecked.
      const new_uniques = [
        ...new Set(data.map((product) => product.catagory)),
      ].reduce((s, a) => {
        // explain to my future self.
        // initial value is {}
        // on the first iteration s is {} a is a unique catagory.
        // always returning s as s has an object.
        // I am just adding an object key using each unique value (a)
        s[a] = false;
        return s;
      }, {});
      setCatagoriesAllowed(new_uniques);
      setProducts(data);
      setFilteredProducts(data);
      const paginationNum = data.length / 8;
      if (paginationNum == Number.isInteger(paginationNum)) {
        setPagination(paginationNum);
      } else {
        setPagination(Math.trunc(paginationNum) + 1);
      }
      dispatch(shopActions.replaceShop(data));
    });
  }, [dispatch]);

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
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          <Grid item container width={0.8} xs={9} flexDirection="column">
            <Grid
              item
              container
              gap={2}
              justifyContent="start"
              alignItems="start"
              padding="0 0 48px 0"
            >
              {!isLoading &&
                products
                  .filter((product) => {
                    const low_num = (page - 1) * 8;
                    const high_num = low_num + 8;

                    if (
                      !catagoriesAllowed[product.catagory] &&
                      filteredProducts.indexOf(product) >= low_num &&
                      filteredProducts.indexOf(product) < high_num
                    ) {
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
            <Grid item container justifyContent="center">
              <Pagination
                count={pagination}
                page={page}
                onChange={handleChange}
                shape="rounded"
              />
            </Grid>
          </Grid>
        </Grid>
      </AnimatedPage>
    </>
  );
}

export default ShopPage;
