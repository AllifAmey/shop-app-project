import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CheckOutStep1_Part2(props) {
  const miniContainerStyles = {
    fontSize: "20px",
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
                fullWidth
                id="outlined-basic"
                label="Address line 1"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Address line 2"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={miniContainerStyles}>
          <Grid item container flexDirection="column" xs={6} gap={2}>
            <Grid item>City</Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid item container flexDirection="column" xs={6} gap={2}>
            <Grid item>Post Code</Grid>
            <Grid item>
              <TextField
                id="outlined-basic"
                label="Post Code"
                variant="outlined"
                size="small"
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
            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              size="small"
            />
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

export default CheckOutStep1_Part2;
