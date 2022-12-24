import React, { useRef } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { useForm } from "react-hook-form";

function CheckOutStep1_Part1(props) {
  const first_name = useRef(""),
    last_name = useRef("");
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState(false);
  /*
  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };*/
  const miniContainerStyles = {
    fontSize: "20px",
  };
  /*
  {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    county: "",
    post_code: "",
    delivery_type: "",
  }

  */

  //  setDeliveryInfo={setDeliveryInfo};
  //  deliveryInfo={deliveryInfo};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (!phoneError) {
      props.changeStep("forward");
      props.setDeliveryInfo({
        ...props.deliveryInfo,
        first_name: first_name.current.value,
        last_name: last_name.current.value,
        email: data.email,
        phone_number: phone,
      });
    }
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
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        height="100vh"
      >
        <Grid
          item
          sx={{
            paddingBottom: "1rem",
            fontSize: "44px",
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
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                inputRef={first_name}
              />
            </Grid>
          </Grid>
          <Grid item container flexDirection="column" xs={6} gap={2}>
            <Grid item>Last Name</Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                inputRef={last_name}
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
              label="email"
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
              defaultCountry="GB"
              value={phone}
              onChange={(newPhone) => {
                setPhone(newPhone);
                setPhoneError(!matchIsValidTel(newPhone));
              }}
              error={phoneError}
              helperText={
                phoneError ? "Invalid Phone number" : "Valid Phone Number"
              }
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            size="big"
            type="submit"
            style={{ paddingTop: "1rem" }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutStep1_Part1;
