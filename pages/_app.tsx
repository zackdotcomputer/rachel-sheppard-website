if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}
import "../styles/global.scss";

import { AppProps } from "next/app";
import PageLayout from "../components/PageLayout";
import SiteSettingsContext, { useSiteContextValues } from "../components/SiteSettingsContext";

export default function RachelApp({ Component, pageProps }: AppProps) {
  const contextValues = useSiteContextValues();
  return (
    <SiteSettingsContext.Provider value={contextValues}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SiteSettingsContext.Provider>
  );
}
