import Grid from "@mui/material/Grid";

function CheckOutOrderItemDesktop(props) {
  const styleImg = { height: "40px", width: "40px", borderRadius: "30%" };

  return (
    <>
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
          src={props.cartItem.product.image_url}
          alt={props.cartItem.product.catagory}
          sx={styleImg}
        ></Grid>
        <Grid
          item
          container
          flexDirection="column"
          justifyContent="space-between"
          xs={7}
        >
          <Grid item>Handmade {props.cartItem.product.name}</Grid>
          <Grid item>Quantity: {props.cartItem.quantity}</Grid>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "end" }}>
          £
          {Number(
            props.cartItem.product.price * props.cartItem.quantity
          ).toFixed(2)}
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutOrderItemDesktop;
