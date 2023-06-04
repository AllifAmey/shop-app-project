import { useRef } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CountrySelect from "../CountrySelect";
import { useForm } from "react-hook-form";

function CheckOutStep1_Part2Desktop(props) {
  /*
    docs:
      read CheckOutPage.jsx docs
  */

  const address_line1 = useRef(""),
    address_line2 = useRef(""),
    country = useRef("");
  const miniContainerStyles = {
    fontSize: "20px",
  };
  const {
    _,
    handleSubmit,
    formState: { __ },
  } = useForm();

  const onSubmit = (data) => {
    props.changeStep("forward");
    props.setDeliveryInfo({
      ...props.deliveryInfo,
      address: `${address_line1.current.value} # ${address_line2.current.value}`,
      country: country.current.value,
    });
  };

  return (
    <>
      <Grid
        item
        container
        xs={9}
        flexDirection="column"
        justifyContent="start"
        gap={2}
        height="100vh"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid
          item
          sx={{
            paddingBottom: "1rem",
            fontSize: "44px",
            borderBottom: "0.5px solid #dee2e6",
            width: "80%",
          }}
        >
          Address
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            flexDirection="column"
            xs={6}
            gap={2}
            sx={miniContainerStyles}
          >
            <Grid item>Address</Grid>
            <Grid item>
              <TextField
                name="address"
                fullWidth
                id="outlined-basic"
                label="Address line 1"
                variant="outlined"
                size="small"
                inputRef={address_line1}
                inputProps={{
                  "aria-label": "Address Line 1",
                  "data-cy": "Address Line 1",
                }}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                name="address"
                fullWidth
                id="outlined-basic"
                label="Address line 2"
                variant="outlined"
                size="small"
                inputRef={address_line2}
                inputProps={{
                  "aria-label": "Address Line 2",
                  "data-cy": "Address Line 2",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={miniContainerStyles}>
          <Grid item container flexDirection="column" xs={6} gap={2}>
            <Grid item>City</Grid>
            <Grid item>
              <TextField
                name="city"
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
                value={props.deliveryInfo.city}
                onChange={(e) => {
                  props.setDeliveryInfo({
                    ...props.deliveryInfo,
                    city: e.target.value,
                  });
                }}
                inputProps={{
                  "aria-label": "City",
                  "data-cy": "City",
                }}
                required
              />
            </Grid>
          </Grid>
          <Grid item container flexDirection="column" xs={6} gap={2}>
            <Grid item>Post Code</Grid>
            <Grid item>
              <TextField
                name="post code"
                id="outlined-basic"
                label="Post Code"
                autoComplete="postal-code"
                variant="outlined"
                size="small"
                value={props.deliveryInfo.post_code}
                onChange={(e) => {
                  props.setDeliveryInfo({
                    ...props.deliveryInfo,
                    post_code: e.target.value,
                  });
                }}
                inputProps={{
                  "aria-label": "Post Code",
                  "data-cy": "Post Code",
                }}
                required
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          flexDirection="column"
          gap={2}
          sx={miniContainerStyles}
        >
          <Grid item>Country</Grid>
          <Grid item>
            <CountrySelect inputRef={country}></CountrySelect>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ width: "85%" }}
        >
          <Button
            variant="text"
            size="big"
            onClick={() => {
              props.changeStep("back");
            }}
            style={{ paddingTop: "1rem" }}
            aria-label="Go back to Contact Step"
            data-cy="Back"
          >
            Back
          </Button>
          <Button
            variant="text"
            size="big"
            type="submit"
            style={{ paddingTop: "1rem" }}
            aria-label="Go to Delivery step"
            data-cy="Continue"
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutStep1_Part2Desktop;
