import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// utility
import AnimatedPage from "../../utility/AnimatedPage";
import FiltersIconMobile from "./utility/Mobile/FiltersIconMobile";
import ProductCardMobile from "./utility/Mobile/ProductCardMobile";

// 3rd party components.
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

// store
import { shopActions } from "../../../store";

function ShopContentMobile(props) {
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
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // set them false by default so checkboxes are unchecked.
    const new_uniques = [
      ...new Set(props.products.map((product) => product.catagory)),
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
    setProducts(props.products);
    setFilteredProducts(props.products);
    const paginationNum = props.products.length / 8;
    if (paginationNum === Number.isInteger(paginationNum)) {
      setPagination(paginationNum);
    } else {
      setPagination(Math.trunc(paginationNum) + 1);
    }
    dispatch(shopActions.replaceShop(products));
  }, []);

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
          <Grid
            item
            container
            alignSelf="start"
            flexDirection="column"
            justifyContent="start"
            alignContent="center"
            xs={2}
          >
            <FiltersIconMobile
              catagoriesAllowed={catagoriesAllowed}
              setCatagoriesAllowed={setCatagoriesAllowed}
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
          </Grid>
          <Grid item container flex={1} flexDirection="column">
            <Grid
              item
              container
              justifyContent="start"
              alignItems="start"
              padding="0 0 48px 0"
              flexWrap="wrap"
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
                  .map((product) => {
                    return (
                      <ProductCardMobile
                        key={product.id}
                        product={product}
                      ></ProductCardMobile>
                    );
                  })}

              {isLoading && (
                <CircularProgress size="25rem" sx={{ margin: "auto" }} />
              )}
            </Grid>
            <Grid item container justifyContent="center" paddingTop="1rem">
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

export default ShopContentMobile;
