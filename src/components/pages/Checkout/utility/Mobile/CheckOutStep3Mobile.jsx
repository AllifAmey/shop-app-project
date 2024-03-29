import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PaymentButton from "../../../../utility/PaymentButton";
import {
  postOrders,
  postOrdersAnonymous,
} from "../../../../services/Internal_API/AccountAPI/Orders/OrderAPI";
import { cartActions } from "../../../../../store";

function CheckOutStep3Mobile(props) {
  /*
   docs:
      read CheckOutPage.jsx docs
      
  */
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  function userCart() {
    let initial_cart = [];
    cart.forEach((cartItem) => {
      const product_id = cartItem.product.id;
      const quantity = cartItem.quantity;
      initial_cart.push({
        product_id: product_id,
        quantity: quantity,
      });
    });
    return initial_cart;
  }

  const dispatch = useDispatch();
  /*
    Payment Step

    https://assets.materialup.com/uploads/26835f88-f345-4bbd-ac07-a6a553311538/preview.png Inspiration

    Card number inspiration: 
    https://assets.materialup.com/uploads/6ec7f467-26ee-49b8-9ca0-542f6ff8b8e4/preview.png

    Just a note: 
    https://github.com/mui/material-ui/blob/649ef2e34c10c90788b7506e88958c91f87f924c/src/TextField/TextField.js#L171
    https://stackoverflow.com/questions/35093107/how-to-override-the-width-of-a-textfield-component-with-react-mui

    The stackoverflow answer seems to indicate that I have to look directly at the code and its documentation to ,
    fully comprehend the material ui component as opposed to looking at the site's documentation. 

    */

  // This needs a lot of work
  // TODO: Order Summary over here
  // TODO: Ensure the current delivery information is clear.
  // TODO: Ensure the payment button works completely and on success submit orders

  return (
    <>
      <Grid
        item
        container
        flexDirection="column"
        justifyContent="start"
        gap={2}
      >
        <Grid
          item
          sx={{
            paddingBottom: "1rem",
            fontSize: "44px",
            borderBottom: "0.5px solid #dee2e6",
            width: "80%",
          }}
        >
          Payment
        </Grid>
        <Grid item container width={0.8} justifyContent="space-between">
          <PaymentButton></PaymentButton>
          <Grid item container flexDirection="column" width={0.5}>
            {Object.entries(props.deliveryInfo).map(([key, value]) => (
              <Grid item container gap={2} key={key}>
                <Grid item>{key}</Grid>
                <Grid item>{value}</Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size="big"
              onClick={() => {
                const logged = localStorage.getItem("isLogged");
                if (logged === "LOGGED_IN") {
                  postOrders(
                    setIsLoading,
                    props.deliveryInfo,
                    props.total_price
                  ).then((_) => {
                    dispatch(cartActions.replaceCart([]));
                  });
                } else {
                  postOrdersAnonymous(
                    setIsLoading,
                    props.deliveryInfo,
                    props.total_price,
                    userCart()
                  ).then((_) => {
                    dispatch(cartActions.replaceCart([]));
                  });
                }
              }}
              style={{ paddingTop: "1rem" }}
              aria-label="Submit Order"
            >
              Submit Order
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ width: "85%" }}
        >
          <Button
            variant="text"
            size="big"
            onClick={() => {
              props.changeStep("back");
            }}
            style={{ paddingTop: "1rem" }}
            aria-label="Go back Delivery step"
          >
            Back
          </Button>
          <Button
            variant="text"
            size="big"
            onClick={() => {
              props.changeStep("forward");
            }}
            style={{ paddingTop: "1rem" }}
            aria-label="Complete Order"
          >
            Complete
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutStep3Mobile;
