import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { useForm } from "react-hook-form";

function CheckOutStep1_Part1Tablet(props) {
  /*
   docs:
      read CheckOutPage.jsx docs
      
  */
  const [phoneError, setPhoneError] = useState(false);

  const miniContainerStyles = {
    fontSize: "20px",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!matchIsValidTel(props.deliveryInfo.phone_number)) {
      setPhoneError(true);
    } else if (!phoneError) {
      props.changeStep("forward");
    }
  };
  return (
    <>
      <Grid
        item
        container
        xs={8}
        flexDirection="column"
        justifyContent="start"
        gap={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid
          item
          sx={{
            paddingBottom: "1rem",
            fontSize: "30px",
            borderBottom: "0.5px solid #dee2e6",
            width: "85%",
          }}
        >
          Contact Info
        </Grid>
        <Grid item container sx={miniContainerStyles}>
          <Grid item container flexDirection="column" xs={6} gap={2}>
            <Grid item>First Name</Grid>
            <Grid item>
              <TextField
                name="fname"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                value={props.deliveryInfo.first_name}
                onChange={(e) => {
                  props.setDeliveryInfo({
                    ...props.deliveryInfo,
                    first_name: e.target.value,
                  });
                }}
                inputProps={{
                  "aria-label": "First Name",
                }}
                required
              />
            </Grid>
          </Grid>
          <Grid item container flexDirection="column" xs={6} gap={2}>
            <Grid item>Last Name</Grid>
            <Grid item>
              <TextField
                name="lname"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                value={props.deliveryInfo.last_name}
                onChange={(e) => {
                  props.setDeliveryInfo({
                    ...props.deliveryInfo,
                    last_name: e.target.value,
                  });
                }}
                inputProps={{
                  "aria-label": "Last Name",
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
          <Grid item>Email Address</Grid>
          <Grid item sx={{ width: "50%" }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
              value={props.deliveryInfo.email}
              onChange={(e) => {
                props.setDeliveryInfo({
                  ...props.deliveryInfo,
                  email: e.target.value,
                });
              }}
              inputProps={{
                "aria-label": "Email",
                "aria-invalid": `${errors?.email ? "true" : "false"}`,
              }}
              required
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          flexDirection="column"
          gap={2}
          sx={miniContainerStyles}
        >
          <Grid item>Phone</Grid>
          <Grid item>
            <MuiTelInput
              name="phone"
              defaultCountry="GB"
              value={props.deliveryInfo.phone_number}
              onChange={(newPhone) => {
                props.setDeliveryInfo({
                  ...props.deliveryInfo,
                  phone_number: newPhone,
                });
                setPhoneError(!matchIsValidTel(newPhone));
              }}
              error={phoneError}
              helperText={
                phoneError
                  ? "Invalid Phone number"
                  : props.deliveryInfo.phone_number === ""
                  ? "Empty Phone Number"
                  : "Valid Phone Number"
              }
              inputProps={{
                "aria-label": "Phone",
                "aria-invalid": `${
                  phoneError || props.deliveryInfo.phone_number === ""
                    ? "true"
                    : "false"
                }`,
              }}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            size="big"
            type="submit"
            style={{ paddingTop: "1rem" }}
            aria-label="Go to physical address step"
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutStep1_Part1Tablet;
