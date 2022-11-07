import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function CustomButton(props) {
  // Customise the material UI button
  // What can be customised:
  // Colour, text, size, type, href

  // props.colour must be a string "#fff" as an example.

  const buttonStyles = {
    backgroundColor: props.bgColour ?? "#ced4da",
    fontSize: "10px",
    color: props.colour ?? "#111122",
    "&:hover": {
      backgroundColor: props.bgColourHover ?? "#868e96",
    },
  };

  return (
    <Button
      variant={props.variant ?? "contained"}
      size={props.size ?? "small"}
      component={Link}
      to={props.href ?? ""}
      sx={buttonStyles}
      onClick={props.onClick}
    >
      {props.text ?? "Buy Now!"}
    </Button>
  );
}

export default CustomButton;
