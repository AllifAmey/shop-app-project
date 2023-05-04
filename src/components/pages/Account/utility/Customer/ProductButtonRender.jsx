import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  CardMedia,
  Grid,
} from "@mui/material";

function ProductButtonRender(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dialogContainerStyles = {
    height: "100%",
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    fontSize: "18px",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  return (
    <>
      {props.value !== "" && (
        <Button
          variant="contained"
          onClick={() => {
            handleOpen();
          }}
        >
          Product Details
        </Button>
      )}
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
            flex: "1 1 50%",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <CardMedia
          component="img"
          image={props.value.image_url}
          alt={props.value.catagory}
          sx={{
            height: "80%",
            width: "80vh",
            marginLeft: "4%",
            borderRadius: "20px",
          }}
        ></CardMedia>
        <DialogContent
          sx={{
            height: "60vh",
            lineHeight: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid sx={dialogContainerStyles}>
            <DialogTitle fontSize={30}>Quick Info </DialogTitle>
            <Grid>Handmade item </Grid>
            <Grid>
              Handmade item Dispatches from a small business in United Kingdom
            </Grid>
            <Grid>Materials: copper</Grid>
            <Grid>FREE UK delivery</Grid>
            <DialogActions>
              <Button onClick={handleClose} size="big">
                Close
              </Button>
            </DialogActions>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductButtonRender;
