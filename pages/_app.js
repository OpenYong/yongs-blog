import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Layout>
        <Head>
          <title>Yong's 블로그</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
