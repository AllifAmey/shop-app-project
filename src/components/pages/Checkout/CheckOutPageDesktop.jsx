import { useState } from "react";
import { useSelector } from "react-redux";

// 3rd party components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";

// utility
import CheckOutStep1_Part1 from "./utility/Desktop/CheckOutStep1_Part1Desktop";
import CheckOutStep1_Part2 from "./utility/Desktop/CheckOutStep1_Part2Desktop";
import CheckOutStep2 from "./utility/Desktop/CheckOutStep2Desktop";
import CheckOutStep3 from "./utility/Desktop/CheckOutStep3Desktop";
import CheckOutOrderItem from "./utility/Desktop/CheckOutOrderItemDesktop";

function CheckOutPageDesktop() {
  /*
    https://boltfinancial.wpengine.com/wp-content/uploads/2019/10/made-checkout-example-progress-indicator-1.png

    

    */
  // consts
  const cart = useSelector((state) => state.cart.cart);
  const [deliveryInfo, setDeliveryInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    city: "",
    country: "",
    post_code: "",
    delivery_type: "",
    delivery_msg: "",
  });
  const [count, setCount] = useState(0);

  // functionality

  const changeStep = (typeStep) => {
    if (typeStep === "forward") {
      console.log(count);
      setCount(count + 1);
    }
    if (typeStep === "back") {
      setCount(count - 1);
    }
  };

  function subtotalNum(total = false) {
    let itemNum = 0;

    if (cart.length === 0) {
      return 0;
    }

    cart.forEach((cartItem) => {
      itemNum += Number(cartItem.product.price * cartItem.quantity);
    });
    if (total === false) {
      return itemNum.toFixed(2);
    }
    return (itemNum + 2).toFixed(2);
  }

  const total_price = subtotalNum(true);
  // styles

  const checkoutContainerStyles = { fontSize: "14px" };

  const titleStyle = {
    fontSize: "30px",
    borderBottom: "0.5px solid #dee2e6",
    textAlign: "center",
    padding: "0.8rem 0",
  };

  // steps

  /* eslint-disable */
  const steps = {
    0: (
      <CheckOutStep1_Part1
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
      ></CheckOutStep1_Part1>
    ),
    1: (
      <CheckOutStep1_Part2
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
      ></CheckOutStep1_Part2>
    ),
    2: (
      <CheckOutStep2
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
      ></CheckOutStep2>
    ),
    3: (
      <CheckOutStep3
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
        total_price={total_price}
      ></CheckOutStep3>
    ),
  };

  /* eslint-enable */
  return (
    <>
      <Container maxWidth="lg" height="auto">
        <Grid container flexDirection="column" height="auto">
          <Grid item container justifyContent="center" alignItems="center">
            <Stepper
              alternativeLabel
              activeStep={count === 1 || count === 0 ? 0 : count - 1}
              sx={{ width: "50%", paddingTop: "2rem" }}
            >
              <Step>
                <StepLabel
                  StepIconProps={{
                    titleAccess: "Step 1",
                  }}
                >
                  Address
                </StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconProps={{ titleAccess: "Step 2" }}>
                  Delivery
                </StepLabel>
              </Step>
              <Step>
                <StepLabel StepIconProps={{ titleAccess: "Step 3" }}>
                  Payments
                </StepLabel>
              </Step>
            </Stepper>
          </Grid>
          <Grid item container height="auto" paddingBottom="2rem" xs>
            {steps[count]}
            <Grid
              item
              xs={3}
              container
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="center"
              alignSelf="start"
              gap={2}
              sx={checkoutContainerStyles}
            >
              <Grid item sx={titleStyle} width={1}>
                Order Summary
              </Grid>
              {cart.map((cartItem) => {
                return (
                  <CheckOutOrderItem
                    key={cartItem.product.id}
                    cartItem={cartItem}
                  ></CheckOutOrderItem>
                );
              })}

              <Grid item container justifyContent="space-between">
                <Grid item>Subtotal</Grid>
                <Grid item>
                  {subtotalNum() === 0 ? "" : `£ ${subtotalNum()}`}
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between">
                <Grid item>Delivery fee</Grid>
                <Grid item>{subtotalNum() === 0 ? "" : "£2.00"}</Grid>
              </Grid>
              <Grid item container justifyContent="space-between">
                <Grid item>Total to pay</Grid>
                <Grid item>
                  {subtotalNum() === 0 ? "" : `£ ${subtotalNum(true)}`}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CheckOutPageDesktop;
