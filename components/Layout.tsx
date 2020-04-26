import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  footerText?: string;
  email?: string;
  siteTitle: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  footerText
}: React.PropsWithChildren<Props>) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>{footerText}</span>
    </footer>
  </div>
);

export default Layout;
