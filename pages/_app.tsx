import Head from "next/head";
import { AppProps } from "next/app";
import "../styles/global.scss";
import { attributes } from "../content/siteconfig.md";
import Layout from "../components/Layout";

interface ConfigSettings {
  title?: string;
  footer?: string;
  email?: string;
  description?: string;
}

export default function RachelApp({ Component, pageProps }: AppProps) {
  const { title, footer, email, description } = attributes as ConfigSettings;

  return (
    <Layout siteTitle={title ?? "Untitled"} footerText={footer} email={email}>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Component {...pageProps} siteTitle={title} siteDescription={description} />
    </Layout>
  );
}
