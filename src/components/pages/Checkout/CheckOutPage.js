import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Container from "@mui/material/container";
import CheckOutOrderItem from "./CheckOutOrderItem";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CheckOutStep1_Part1 from "./CheckOutStep1_Part1";
import CheckOutStep1_Part2 from "./CheckOutStep1_Part2";
import CheckOutStep2 from "./CheckOutStep2";
import CheckOutStep3 from "./CheckOutStep3";

function CheckOutPage() {
  /*
    https://boltfinancial.wpengine.com/wp-content/uploads/2019/10/made-checkout-example-progress-indicator-1.png

    Is the inspiration. I love the progress indicator. 
    
    Future-proofing & DRY:

    1. Make the Order item in the summary form a seperate component at least
    2. Make the Order Summary or at least the payment a seperator component to calculate price individually.
    3. Make individual contact sections ( like Last Name ) into a seperate component.

    When pressing continue , move to the next component and update the progress component.
    After Address and Delivery stage are completed.

    current idea on implementation of Stepper:

    I don't want to dwell into functionality too much at this stage, I want a foundation to build upon. To adhere to that, use the bare minimum.

    First use of functionality will be the use of states.

    Use useState to track the state of the step. Show the component corresponding to the state.

    Further investigation into made shows the full steps 

    Address contains 2 parts with no indicator, I could add that through animation.

    2nd part - 

    Address
    2 textinputfields
    City
    1 Textinputfield
    PostCode
    1 short Textinputfield
    Country
    Select widget from material UI is very similar.

    Delivery

    A list of products , I assume, is shown above. 
    Shows different standards of delivery
    Standard 
    Saturday Delivery
    Sunday Delivery

    Idea of delivery : show fast vs slow or estimate the time.

    Payment

    This is typical payment form that can be implemented much later.

    */
  // consts
  const cart = useSelector((state) => state.cart.cart);
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

    if (cart.length == 0) {
      return 0;
    }

    cart.forEach((element) => {
      itemNum += Number(element.price);
    });
    if (total == false) {
      return itemNum.toFixed(2);
    }
    return (itemNum + 2).toFixed(2);
  }
  // styles

  const checkoutContainerStyles = { fontSize: "14px" };

  const titleStyle = {
    fontSize: "30px",
    borderBottom: "0.5px solid #dee2e6",
    textAlign: "center",
    padding: "0.8rem 0",
  };

  // steps

  const steps = {
    0: <CheckOutStep1_Part1 changeStep={changeStep}></CheckOutStep1_Part1>,
    1: <CheckOutStep1_Part2 changeStep={changeStep}></CheckOutStep1_Part2>,
    2: <CheckOutStep2 changeStep={changeStep}></CheckOutStep2>,
    3: <CheckOutStep3 changeStep={changeStep}></CheckOutStep3>,
  };

  return (
    <>
      <Container maxWidth="lg" height="auto">
        <Grid container flexDirection="column" height="100vh">
          <Grid item container justifyContent="center" alignItems="center">
            <Stepper
              alternativeLabel
              activeStep={count == 1 || count == 0 ? 0 : count - 1}
              sx={{ width: "50%", paddingTop: "2rem" }}
            >
              <Step>
                <StepLabel>Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Delivery</StepLabel>
              </Step>
              <Step>
                <StepLabel>Payments</StepLabel>
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
              {cart.map((item) => {
                console.log(item);
                return (
                  <CheckOutOrderItem
                    key={item.key}
                    img={item.image_url}
                    quantity={item.quantity}
                    type={item.name.toLowerCase()}
                    price={item.price}
                  ></CheckOutOrderItem>
                );
              })}

              <Grid item container justifyContent="space-between">
                <Grid item>Subtotal</Grid>
                <Grid item>
                  {subtotalNum() == 0 ? "" : `£ ${subtotalNum()}`}
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between">
                <Grid item>Delivery fee</Grid>
                <Grid item>{subtotalNum() == 0 ? "" : "£2.00"}</Grid>
              </Grid>
              <Grid item container justifyContent="space-between">
                <Grid item>Total to pay</Grid>
                <Grid item>
                  {subtotalNum() == 0 ? "" : `£ ${subtotalNum(true)}`}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CheckOutPage;
