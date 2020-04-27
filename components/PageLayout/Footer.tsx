// import Link from "next/link";

import { useContext } from "react";
import SiteSettingsContext from "../SiteSettingsContext";

export default function Footer() {
  const { state } = useContext(SiteSettingsContext);

  return (
    <footer>
      <hr />
      <div className="container text-center mb-3">{state?.footer}</div>
    </footer>
  );
}
