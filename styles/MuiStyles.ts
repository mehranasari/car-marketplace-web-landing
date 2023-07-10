import { createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#1839E8",
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          padding: "0.625rem 1.25rem",
          ":hover": {
            // backgroundColor:"unset"
          }
        },

      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          " &.MuiSelect-icon": {
            color: "white",
          }
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "white",
          fontFamily: "irs",
          borderRadius: "12px",
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        "fab": {
          width: "4rem",
          height: "4rem",
        },
        "staticTooltipLabel": {
          fontFamily: "irs",
          width: "9.8rem",
          fontSize: "1.2rem !important",
          color:"black",
          borderRadius:"1rem",
          textAlign:"center",
          
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "::before": {
            borderBottom: "0.063rem solid white",
          },
          ":hover:not(.Mui-disabled)::before": {
            borderBottom: "0.175rem solid white",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#506CFF",
          fontFamily: "irs",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "0.75rem",
          ":hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#1839E8",
            },
          },
        },
        notchedOutline: {
          borderColor: "rgba(24, 57, 232, 0.4)",
        },
        input: {
          background: "#1a1a1a",
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #1a1a1a inset",
            WebkitTextFillColor: "white !important",
          },
        },
      },
    },
  },
});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
  prepend: true,
});
