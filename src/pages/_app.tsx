import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MUIButton from 'components/MUIButton';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
