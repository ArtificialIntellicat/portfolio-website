import '../app/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function PortfolioWebsite({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(PortfolioWebsite);
