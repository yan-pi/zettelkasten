import '../global.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  );
}
