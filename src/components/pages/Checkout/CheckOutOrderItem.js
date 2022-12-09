import { Grid } from "@mui/material";

function CheckOutOrderItem(props) {
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
          src={props.img}
          jewellery={props.type}
          sx={styleImg}
        ></Grid>
        <Grid
          item
          container
          flexDirection="column"
          justifyContent="space-between"
          xs={7}
        >
          <Grid item>Handmade {props.type}</Grid>
          <Grid item>Quantity: {props.quantity}</Grid>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "end" }}>
          £{props.price}
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutOrderItem;
