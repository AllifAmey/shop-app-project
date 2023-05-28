import { useState } from "react";
import { useSelector } from "react-redux";

// 3rd party components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Container from "@mui/material/Container";

// utility
import CheckOutStep1_Part1Mobile from "./utility/Mobile/CheckOutStep1_Part1Mobile";
import CheckOutStep1_Part2Mobile from "./utility/Mobile/CheckOutStep1_Part2Mobile";
import CheckOutStep2Mobile from "./utility/Mobile/CheckOutStep2Mobile";
import CheckOutStep3Mobile from "./utility/Mobile/CheckOutStep3Mobile";

function CheckOutPageMobile() {
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

  // steps

  /* eslint-disable */
  const steps = {
    0: (
      <CheckOutStep1_Part1Mobile
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
      ></CheckOutStep1_Part1Mobile>
    ),
    1: (
      <CheckOutStep1_Part2Mobile
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
      ></CheckOutStep1_Part2Mobile>
    ),
    2: (
      <CheckOutStep2Mobile
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
      ></CheckOutStep2Mobile>
    ),
    3: (
      <CheckOutStep3Mobile
        changeStep={changeStep}
        setDeliveryInfo={setDeliveryInfo}
        deliveryInfo={deliveryInfo}
        total_price={total_price}
      ></CheckOutStep3Mobile>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CheckOutPageMobile;
