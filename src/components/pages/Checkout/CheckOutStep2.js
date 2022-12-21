import React, { useState } from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";

function CheckOutStep2(props) {
  /*Inspiration: 
  https://help-uk.newlook.com/hc/article_attachments/4410674657553/Standard.jpg */
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const itemStyles = {
    fontSie: "18px",
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
        height="60vh"
      >
        <Grid
          item
          sx={{
            padding: "1rem 0",
            fontSize: "44px",
            borderBottom: "0.5px solid #dee2e6",
            width: "80%",
            textAlign: "center",
          }}
        >
          Delivery Type
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          width="60%"
          margin="0 auto"
        >
          <Grid item xs={6} sx={itemStyles}>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            £2.99
          </Grid>
          <Grid item container flexDirection="column" sx={itemStyles} xs={6}>
            <Grid item>Delivered By Thu 18 Nov</Grid>
            <Grid item>Standard Delivery</Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          width="60%"
          margin="0 auto"
        >
          <Grid item xs={6} sx={itemStyles}>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
            £3.99
          </Grid>
          <Grid item container flexDirection="column" xs={6} sx={itemStyles}>
            <Grid item>Delivered By Thu 15 Nov</Grid>
            <Grid item>Premium Delivery</Grid>
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
          >
            Back
          </Button>
          <Button
            variant="text"
            size="big"
            onClick={() => {
              props.changeStep("forward");
            }}
            style={{ paddingTop: "1rem" }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutStep2;