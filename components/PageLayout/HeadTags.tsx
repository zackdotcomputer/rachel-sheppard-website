import Head from "next/head";
import { useContext } from "react";
import SiteSettingsContext from "../SiteSettingsContext";

export default function HeadTags() {
  const { state } = useContext(SiteSettingsContext);

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{state?.title}</title>
      <meta name="description" content={state?.description} />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
  );
}
