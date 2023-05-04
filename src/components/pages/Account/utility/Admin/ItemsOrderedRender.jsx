import { useState } from "react";

import { Button, Dialog, DialogContent, Grid } from "@mui/material";

function ItemsOrderedRender(params) {
  // renders item ordered on the admin page

  const [open, setOpen] = useState(false);
  const [openPic, setOpenPic] = useState(false);
  const [storePic, setStorePic] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // TODO: investigate whether the utility function could be used.
  const total_order_amount = params.data.order.reduce(
    (initialValue, currentOrderItem) => {
      const currentTotalPrice = Number(
        (
          Number(currentOrderItem.product.price) * currentOrderItem.quantity
        ).toFixed(2)
      );
      return initialValue + currentTotalPrice;
    },
    0
  );
  const headingSize = { fontSize: "20px" };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        View Items
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
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            lineHeight: "1.5rem",
            padding: "1rem",
          }}
        >
          <Grid container sx={{}}>
            <Grid container flexDirection="Column" textAlign="center">
              <Grid sx={headingSize}>Products ordered</Grid>
            </Grid>
            <Grid
              container
              flexDirection="column"
              width="50%"
              marginBottom="1rem"
            >
              <Grid item sx={headingSize}>
                Personal Information
              </Grid>
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
              <Grid item sx={headingSize}>
                Address
              </Grid>
              {params.data.personal_info_used.address.split("#").map((e) => {
                return <Grid item>{e}</Grid>;
              })}
              <Grid item>{params.data.personal_info_used.city}</Grid>
              <Grid item>{params.data.personal_info_used.post_code}</Grid>
            </Grid>
            <Grid container flexDirection="column">
              <Grid container width="space-between" marginBottom="1rem">
                <Grid container flexDirection="column" width="50%">
                  <Grid item sx={headingSize}>
                    Payment Method
                  </Grid>
                  <Grid item>Paypal</Grid>
                </Grid>
                <Grid
                  container
                  flexDirection="column"
                  width="50%"
                  textAlign="end"
                >
                  <Grid item sx={headingSize}>
                    Delivery Type
                  </Grid>
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
                    <Grid item flex="1" textAlign="start" sx={headingSize}>
                      Picture
                    </Grid>
                    <Grid item flex="1" textAlign="start" sx={headingSize}>
                      Items
                    </Grid>
                    <Grid item flex="1" sx={headingSize}>
                      Quantity
                    </Grid>
                    <Grid item flex="1" sx={headingSize}>
                      Price
                    </Grid>
                  </Grid>
                  {params.data.order.map((productOrdered) => {
                    return (
                      <Grid
                        container
                        justifyContent="space-between"
                        textAlign="end"
                        gap="1rem"
                      >
                        <img
                          src={productOrdered.product.image_url}
                          loading="lazy"
                          style={{
                            height: "100px",
                            width: "100px",
                            borderRadius: "10px",
                          }}
                          onClick={() => {
                            setStorePic(productOrdered.product.image_url);
                            setOpenPic(true);
                          }}
                        ></img>
                        <Grid item flex="1" textAlign="center">
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
                    sx={headingSize}
                  >
                    Delivery Instructions:
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
      <Dialog
        open={openPic}
        onClose={() => {
          setOpenPic(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            height: "80vh",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={storePic}
            alt="product picture"
            style={{
              height: "90%",
              maxWidth: "100%",
              objectFit: "fill",
              background: "no-repeat center center/cover",
              borderRadius: "20px",
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ItemsOrderedRender;
