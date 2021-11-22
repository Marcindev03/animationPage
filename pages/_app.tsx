import { FC } from "react";
import { AppProps } from "next/app";

import Layout from "../components/Layout/Layout";

import "../styles/globals.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => (
  <Layout key={router.pathname}>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
