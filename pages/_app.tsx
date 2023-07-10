import { Fragment,useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";

import { GlobalStyle } from "../styles/GlobalStyle";
import { cacheRtl, theme } from "../styles/MuiStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  );
}

export default MyApp;
