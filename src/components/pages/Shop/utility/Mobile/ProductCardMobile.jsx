import { useState, forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// 3rd party components.
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import SvgIcon from "@mui/material/SvgIcon";
import Slide from "@mui/material/Slide";

// store
import { cartActions } from "../../../../../store/index";

// apis
import {
  getCart,
  patchCartItem,
  postCart,
} from "../../../../services/Internal_API/AccountAPI/Cart/CartAPI";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductCardMobile(props) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  /* --------- redux ------------*/
  const cartRedux = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addCartHandler = () => {
    if (localStorage.getItem("isLogged") === "LOGGED_IN") {
      getCart(setIsLoading).then((user_cart) => {
        setIsLoading(true);
        const existingCartItem = user_cart.find(
          (cart_item) => cart_item.product.id === props.product.id
        );
        if (!existingCartItem) {
          postCart(setIsLoading, props.product.id).then((new_cartItem) => {
            dispatch(cartActions.addNewCartItem(new_cartItem));
          });
        } else {
          patchCartItem(
            setIsLoading,
            existingCartItem.cart_item_id,
            props.product.id,
            existingCartItem.quantity + 1
          ).then((new_cartItem) => {
            dispatch(
              cartActions.changeExistingItem(["increase", new_cartItem.id])
            );
          });
        }
      });
    } else if (localStorage.getItem("isLogged") !== "LOGGED_IN") {
      // if user not logged in just pass the product id
      const existingCartItem = cartRedux.find(
        (cart_item) => cart_item.product.id === props.product.id
      );
      if (!existingCartItem) {
        dispatch(
          cartActions.addNewCartItem({
            quantity: 1,
            product: props.product,
          })
        );
      } else {
        dispatch(
          cartActions.changeExistingItem([
            "increase",
            props.product.id,
            "anonymous",
          ])
        );
      }
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* ------------------------------ */

  // Using Paper for the product card ??
  // Paper according to net ninja https://www.youtube.com/watch?v=GYTN5JdkLSQ&ab_channel=TheNetNinja
  // is basically meant to look like paper on a screen with some elevation.
  // quick info instead on the image.
  // whole product card to be in the paper
  // https://codes4education.com/wp-content/uploads/2020/10/CSS-Creative-Product-Card-UI-Design-E-commerce-Card-Using-Html5-CSS3-Code4Education-min.jpg

  const paperStyles = {
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    border: "1px solid #96f2d7",
    fontSize: "10px",
  };
  return (
    <>
      <Grid item sx={{ flex: "0 0 50%" }}>
        <Card sx={paperStyles} elevation={2}>
          <Box
            component={Button}
            sx={{
              height: "80px",
              width: "100px",
              "&:hover": {
                background: "none",
              },
            }}
            onClick={handleClickOpen}
            disableRipple
            aria-label="Popup for more product info"
          >
            <CardMedia
              component="img"
              src={props.product.image_url}
              alt={props.product.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Grid
            item
            fontSize="14px"
            textAlign="start"
          >{`Handmade ${props.product.name}`}</Grid>
          <Grid container width="100%" justifyContent="space-around">
            <Grid item>{`£${props.product.price}`}</Grid>
            <Grid item>FREE UK delivery</Grid>
          </Grid>

          <Grid container justifyContent="center" gap={2}>
            <RouterLink
              to={`/product/handmade-${props.product.name
                .toLowerCase()
                .replaceAll(" ", "-")}-${props.product.id}`}
              title="Details"
            >
              <Button
                variant="contained"
                size="small"
                aria-label={`Button link to ${props.product.name} detail page`}
              >
                Details
              </Button>
            </RouterLink>
            <Grid item>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <Button
                  size="small"
                  variant="contained"
                  onClick={addCartHandler}
                  aria-label={`Add ${props.product.name} to cart`}
                  endIcon={
                    <SvgIcon
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.000000pt"
                      height="20.000000pt"
                      viewBox="0 0 30.000000 30.000000"
                      preserveAspectRatio="xMidYMid meet"
                      aria-labelledby="cartTitle cartDesc"
                    >
                      <title id="cartTitle">Cart Icon</title>
                      <desc id="cartDesc">
                        A black coloured illustration of a shopping trolley.
                      </desc>
                      <g
                        transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
                        fill="#C1FAA2"
                        stroke="none"
                      >
                        <path
                          d="M10 271 c0 -5 7 -11 16 -13 11 -2 26 -31 43 -83 l26 -80 73 -3 73 -3
          13 33 c8 18 17 48 21 66 l7 32 -106 0 c-95 0 -106 2 -106 18 0 10 -5 23 -12
          30 -14 14 -48 16 -48 3z m208 -113 c-3 -20 -9 -23 -48 -23 -39 0 -45 3 -48 23
          -3 20 0 22 48 22 48 0 51 -2 48 -22z"
                        />
                        <path
                          d="M104 59 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
          -11z"
                        />
                        <path
                          d="M204 59 c-10 -17 13 -36 27 -22 12 12 4 33 -11 33 -5 0 -12 -5 -16
          -11z"
                        />
                      </g>
                    </SvgIcon>
                  }
                >
                  Add Cart
                </Button>
              )}
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {},
        }}
        TransitionComponent={Transition}
      >
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid item alignSelf="end">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              size="large"
              aria-label="Close Popup"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            sx={{ height: "200px", width: "200px", paddingBottom: "20px" }}
          >
            <CardMedia
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              component="img"
              image={props.product.image_url}
              alt={`Large ${props.product.name}`}
            ></CardMedia>
          </Grid>
          <Grid container flexDirection="column" width={0.8} gap={1}>
            <Grid item fontSize={30} textAlign="center">
              Quick Info
            </Grid>
            <Grid item>Handcrafted item</Grid>
            <Grid item>Dispatches from a small business in United Kingdom</Grid>
            <Grid item>Materials: copper</Grid>
            <Grid item>FREE UK delivery</Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}

export default ProductCardMobile;
