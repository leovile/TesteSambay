import Header from 'components/Header';
import { ProductProvider } from 'context';
import { AppProps } from 'next/app';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductProvider>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ProductProvider>
    </>
  );
}

export default App;
