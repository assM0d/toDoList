import { createTheme } from "@material-ui/core/styles";

export default createTheme({

  palette: {
    blue: "#227C9D",
    green: "#17C3B2",
    yellow: "#dc87fc",
    beige: "#FEF9EF",
    red: "#FE6D73",
  },
  typography: {
    fontFamily: `'Montserrat', Arial`,
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
          width: "100%",
          fontFamily: `'Montserrat'`,
        },
        body: {
          height: "100%",
          width: "100%",
          backgroundColor: "#dc87fc",
          "& #root": {
            height: "100%",
          },
        },
      },
    },
  },
});
