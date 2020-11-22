import '../styles/styles.css';
import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </React.StrictMode>
  );
}

export default MyApp;
