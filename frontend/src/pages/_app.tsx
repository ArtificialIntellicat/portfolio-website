import '../app/globals.css';
import { ThemeProvider } from '../context/themeContext';

function PortfolioWebsite({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default PortfolioWebsite;
