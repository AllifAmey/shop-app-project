import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import AnimatedPage from "../../utility/AnimatedPage";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { shopActions } from "../../../store";
import FiltersIcon from "./utility/FiltersIcon";
import Pagination from "@mui/material/Pagination";

function ShopContent(props) {
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
    if (paginationNum == Number.isInteger(paginationNum)) {
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
                  .map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
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

export default ShopContent;
