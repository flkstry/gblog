import '@styles/globals.css'
import { ThemeProvider } from "next-themes"

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Application
