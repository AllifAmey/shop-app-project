import { useState } from "react";
import { Button, Dialog, DialogContent, Grid } from "@mui/material";

function ProductDetailRender(props) {
  // add buttons to allow to edit???
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            maxWidth: "90%",
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            lineHeight: "2rem",
            padding: "1rem",
            height: "80vh",
            width: "80vw",
          }}
        >
          <Grid container justifyContent="center">
            <Grid
              container
              item
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              xs={6}
              gap="8px"
            >
              <Grid item fontSize="20px">
                Catagory:
              </Grid>
              <Grid item>{props.data.catagory}</Grid>
              <Grid item fontSize="20px">
                Name:
              </Grid>
              <Grid item>Handmade {props.data.name}</Grid>
              <Grid item fontSize="20px">
                Long Description
              </Grid>
              <Grid item textAlign="start">
                {props.data.description_long}
              </Grid>
              <Grid item fontSize="20px">
                Short Description ( bullet points )
              </Grid>
              <Grid item textAlign="center">
                {props.data.description_short.split("#").map((e) => {
                  return <Grid item>• {e}</Grid>;
                })}
              </Grid>
            </Grid>
            <Grid container item flexDirection="column" alignItems="center" xs>
              <Grid item fontSize="20px">
                Picture used
              </Grid>
              <Grid item>
                <img
                  style={{
                    height: "500px",
                    width: "500px",
                    borderRadius: "2rem",
                  }}
                  src={props.data.image_url}
                  alt={props.data.name}
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProductDetailRender;
