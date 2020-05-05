import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from "react";
import SiteSettingsContext from "../SiteSettingsContext";

export default function Header() {
  const navLinks = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/research",
      name: "Research"
    },
    {
      path: "/publications",
      name: "Publications"
    },
    {
      path: "/cv",
      name: "CV"
    }
  ];

  const routerPath = useRouter().pathname;

  const { state } = useContext(SiteSettingsContext);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header>
      <div className="container logotype">
        <Link href="/">
          <a>
            <h1>{state?.siteTitle}</h1>
          </a>
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={classnames("collapse", "navbar-collapse", "mr-auto", { show: isExpanded })}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {navLinks.map(({ path, name }, i) => {
                const isSelected = path === routerPath;
                return (
                  <li className={classnames("nav-item", { active: isSelected })} key={`nav-${i}`}>
                    <Link href={path}>
                      <a
                        className="nav-link"
                        onClick={() => {
                          setIsExpanded(false);
                        }}
                      >
                        {name} {isSelected && <span className="sr-only">(current)</span>}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {state?.email && (
            <div className="navbar-text navbar-collapse collapse email-link">
              <a href={`mailto:${state.email}`}>{state.email}</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
