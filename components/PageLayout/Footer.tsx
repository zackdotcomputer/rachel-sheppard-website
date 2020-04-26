// import Link from "next/link";

import { useContext } from "react";
import SiteSettingsContext from "../SiteSettingsContext";

export default function Footer() {
  const { state } = useContext(SiteSettingsContext);

  return (
    <footer>
      <hr />
      {state?.footer}
    </footer>
  );
}
