import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import CheckOutOrderItem from "../../Checkout/CheckOutOrderItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  // this specific modal is the child modal containing the products,
  // the user ordered.

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const styleImg = { height: "40px", width: "40px", borderRadius: "30%" };
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Products Ordered</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          {props.orders.map((item) => {
            return (
              <Grid
                item
                container
                flexDirection="row"
                alignItems="center"
                justifyContent="space-evenly"
              >
                <Grid
                  item
                  component="img"
                  src={item.product.image_url}
                  sx={styleImg}
                ></Grid>
                <Grid
                  item
                  container
                  flexDirection="column"
                  justifyContent="space-between"
                  xs={7}
                >
                  <Grid item>Handmade {item.product.name}</Grid>
                  <Grid item>Quantity: {item.quantity}</Grid>
                </Grid>
                <Grid item xs={2} sx={{ textAlign: "end" }}>
                  £
                  {(Number(item.product.price) * Number(item.quantity)).toFixed(
                    2
                  )}
                </Grid>
              </Grid>
            );
          })}
          <Button onClick={handleClose}>Close Window</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModalOrder(props) {
  // main modal the user sees

  const handleClose = () => {
    props.setOpen(false);
  };

  // go through the props.rowDetail
  // find the one that has the id and display the modal.

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, height: 400 }}>
          {props.rowDetail == false || props.rowDetail.length > 1 ? (
            ""
          ) : (
            <Grid
              container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Grid item>Date Posted</Grid>

              <Grid item>{props.rowDetail[0].date_ordered}</Grid>
              <Grid item>Email used</Grid>
              <Grid item>{props.rowDetail[0].email}</Grid>
              <Grid item>Delivery Status</Grid>
              <Grid item>{props.rowDetail[0].delivery_status}</Grid>
              <Grid item>Delivery Instructions</Grid>
              <Grid item>{props.rowDetail[0].delivery_instructions}</Grid>
              <Grid item>Products ordered</Grid>
              <ChildModal orders={props.rowDetail[0]["order"]}></ChildModal>
              <Grid item>Total Price</Grid>
              <Grid item>{props.rowDetail[0].total_price}</Grid>
            </Grid>
          )}
        </Box>
      </Modal>
    </div>
  );
}
