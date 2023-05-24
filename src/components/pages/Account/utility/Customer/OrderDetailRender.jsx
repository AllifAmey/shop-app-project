import { useState } from "react";

// 3rd party components.
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

// utility
import calculateTotalAmount from "./calculateTotalAmount";

function OrderDetailRender(params) {
  /**Inspirations so far:
   * https://startfoodbooking.com/wp-content/uploads/2021/03/1-2-2.png
   * Most Likely design --> https://community.magento.com/t5/image/serverpage/image-id/15214i492EBBB8C3839898/image-size/large?v=v2&px=999
   * https://mdbcdn.b-cdn.net/docs/standard/extended/order-details/assets/featured.png
   */
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const total_order_amount = calculateTotalAmount(params.data.order);
  console.log(params.data.order);
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          handleOpen();
        }}
        aria-label="Order detail"
      >
        Order details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            height: "90%",
            maxWidth: "70%",
            display: "flex",
            flexDirection: "row",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            background: "#e7f5ff",
          },
        }}
      >
        <DialogContent
          sx={{
            height: "90%",
            lineHeight: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid container flexDirection="Column" textAlign="center">
              <Grid>AmeyShopUk</Grid>
              <Grid>Thank you for ordering!</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              marginBottom="1rem"
            >
              <Grid item>Personal Information</Grid>
              <Grid item>
                {`${params.data.personal_info_used.first_name} ${params.data.personal_info_used.last_name}`}
              </Grid>
              <Grid item>{params.data.personal_info_used.email}</Grid>
              <Grid item>{params.data.personal_info_used.phone_number}</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              textAlign="end"
              height="30%"
              marginBottom="1rem"
            >
              <Grid item>Delivery Information</Grid>
              <Grid item>
                {params.data.personal_info_used.address.replace("#", "")}
              </Grid>
              <Grid item>{params.data.personal_info_used.city}</Grid>
              <Grid item>{params.data.personal_info_used.post_code}</Grid>
            </Grid>
            <Grid container flexDirection="column">
              <Grid container width="space-between" marginBottom="1rem">
                <Grid container flexDirection="column" width="50%">
                  <Grid item>Payment Method</Grid>
                  <Grid item>Paypal</Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  width="50%"
                  textAlign="end"
                >
                  <Grid item>Delivery Type</Grid>
                  <Grid item>
                    {params.data.personal_info_used.delivery_type}
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid container flexDirection="column">
                  <Grid
                    container
                    justifyContent="space-between"
                    textAlign="end"
                  >
                    <Grid item flex="1" textAlign="start">
                      Items
                    </Grid>
                    <Grid item flex="1">
                      Qty
                    </Grid>
                    <Grid item flex="1">
                      Price
                    </Grid>
                  </Grid>
                  {params.data.order.map((productOrdered) => {
                    return (
                      <Grid
                        container
                        justifyContent="space-between"
                        textAlign="end"
                      >
                        <Grid item flex="1" textAlign="start">
                          Handmade {productOrdered.product.name}
                        </Grid>
                        <Grid item flex="1">
                          {productOrdered.quantity}
                        </Grid>
                        <Grid item flex="1">
                          £
                          {(
                            productOrdered.quantity *
                            productOrdered.product.price
                          ).toFixed(2)}
                        </Grid>
                      </Grid>
                    );
                  })}
                  <Grid
                    container
                    justifyContent="space-between"
                    textAlign="end"
                  >
                    <Grid item flex="1" textAlign="start"></Grid>
                    <Grid item flex="1">
                      Total Amount:
                    </Grid>
                    <Grid item flex="1">
                      £{total_order_amount}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="center"
                    textAlign="Center"
                    marginTop="2rem"
                  >
                    Your Delivery Instructions!
                  </Grid>
                  <Grid container justifyContent="center">
                    {params.data.delivery_instructions}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default OrderDetailRender;
