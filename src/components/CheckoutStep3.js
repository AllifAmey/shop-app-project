import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import PaymentButton from "./utility/PaymentButton";

function CheckOutStep3(props) {
  /*
    Payment Step

    https://assets.materialup.com/uploads/26835f88-f345-4bbd-ac07-a6a553311538/preview.png Inspiration

    Card number inspiration: 
    https://assets.materialup.com/uploads/6ec7f467-26ee-49b8-9ca0-542f6ff8b8e4/preview.png

    Just a note: 
    https://github.com/mui/material-ui/blob/649ef2e34c10c90788b7506e88958c91f87f924c/src/TextField/TextField.js#L171
    https://stackoverflow.com/questions/35093107/how-to-override-the-width-of-a-textfield-component-with-react-mui

    The stackoverflow answer seems to indicate that I have to look directly at the code and its documentation to ,
    fully comprehend the material ui component as opposed to looking at the site's documentation. 

    */
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
            paddingBottom: "1rem",
            fontSize: "44px",
            borderBottom: "0.5px solid #dee2e6",
            width: "80%",
          }}
        >
          Payment
        </Grid>
        <Grid item>
          <PaymentButton></PaymentButton>
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
            Complete
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default CheckOutStep3;
