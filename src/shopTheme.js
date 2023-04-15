import { createTheme } from "@mui/material/styles";

// use this to provide a GLOBAL effect on mui components used.
// This will be overriden by the sx property.

export const shopTheme = createTheme({
  components: {
    // Name of the component
    palette: {
      primary: {
        main: "#111122",
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        contained: {
          // Some CSS
          backgroundColor: "#faa2c1",
          fontSize: "10px",
          color: "#0E0E1B",
          "&:hover": {
            backgroundColor: "#f783ac",
          },
        },
      },
    },
  },
});
