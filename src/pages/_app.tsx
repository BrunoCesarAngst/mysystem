import { Provider as ProviderJotai } from 'jotai';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderJotai>
      <Component {...pageProps} />
    </ProviderJotai>
  );
}
