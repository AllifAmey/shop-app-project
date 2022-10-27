import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CustomButton(props) {
  // Customise the material UI button
  // What can be customised:
  // Colour, text, size, type, href

  // props.colour must be a string "#fff" as an example.

  const theme = createTheme({
    palette: {
      secondary: {
        // This is green.A700 as hex.
        main: props.colour ?? "#03f4fc",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={props.type ?? "contained"}
        size={props.size ?? "small"}
        color="secondary"
        component={Link}
        to={props.href ?? "/product-info"}
        style={{ fontSize: "10px" }}
      >
        {props.text ?? "Buy Now!"}
      </Button>
    </ThemeProvider>
  );
}

export default CustomButton;
