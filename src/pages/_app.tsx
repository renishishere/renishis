import { type AppType } from "next/dist/shared/lib/utils";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "next-themes";

// Your themeing variables && css preset: https://www.joshwcomeau.com/css/custom-css-reset/
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #1376E9;
    --bg: #F0F0F0;
    --text: #AFAFAF;
  }

  [data-theme="dark"] {
    --bg: #0F0F0F;
    --text: #D3D3D3;
  }

  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
  body {
    background-color: var(--bg);
  }
  * {
        transition: background-color 0.5s ease-in-out;
  }

  /*
  1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    Typographic tweaks!
    3. Add accessible line-height
    4. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    5. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    6. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    7. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    8. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  
  .wrapper {
    display: grid;
    grid-template-columns:
      1fr
      min(65ch, 100%)
      1fr;
  }
  .wrapper > * {
    grid-column: 2;
  }
  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider enableSystem={false} defaultTheme="dark">
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#1376E9" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
export default MyApp;
