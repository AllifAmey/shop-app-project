import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function CheckOutStep1_Part1(props) {
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
              fullWidth
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              size="small"
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
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid item>
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

export default CheckOutStep1_Part1;
