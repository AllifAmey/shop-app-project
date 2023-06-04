import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// utility
import AnimatedPage from "../../utility/AnimatedPage";
import FiltersIconTablet from "./utility/Tablet/FiltersIconTablet";
import ProductCardTablet from "./utility/Tablet/ProductCardTablet";

// 3rd party components.
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

// store
import { shopActions } from "../../../store";

function ShopContentTablet(props) {
  /*
    docs:
      read ShopPage.jsx docs.
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
            <FiltersIconTablet
              catagoriesAllowed={catagoriesAllowed}
              setCatagoriesAllowed={setCatagoriesAllowed}
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
          </Grid>
          <Grid
            item
            container
            flexDirection="column"
            xs={10}
            justifyContent="space-between"
          >
            <Grid item container gap={2} justifyContent="space-evenly">
              {!isLoading &&
                products
                  .filter((product) => {
                    const low_num = (page - 1) * 6;
                    const high_num = low_num + 6;
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
                  .map((product, idx) => {
                    return (
                      <>
                        <ProductCardTablet
                          key={product.id}
                          product={product}
                        ></ProductCardTablet>
                      </>
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

export default ShopContentTablet;
