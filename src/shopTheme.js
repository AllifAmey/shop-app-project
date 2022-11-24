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
          backgroundColor: "#ced4da",
          fontSize: "10px",
          color: "#111122",
          "&:hover": {
            backgroundColor: "#868e96",
          },
        },
      },
    },
  },
});
