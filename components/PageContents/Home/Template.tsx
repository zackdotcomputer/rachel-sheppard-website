import classnames from "classnames";
import styles from "../../../styles/home.module.scss";
import { useContext } from "react";
import SiteSettingsContext from "../../SiteSettingsContext";
import GetInTouch from "./GetInTouch";

interface Intro {
  image: string;
  imagealt: string;
  heading?: string;
  description?: string;
  includeContact: boolean;
}
export interface HomeProps {
  intro: Intro;
}

export default function Home({ intro }: HomeProps) {
  const { state } = useContext(SiteSettingsContext);

  return (
    <div className={styles.Home}>
      <section className={classnames("container", styles.AboutIntro)}>
        <div className="row">
          <div className={styles.FeaturedImage}>
            <img src={intro.image} alt={intro.imagealt} />
          </div>
        </div>
        <div className="row">
          <h1>{intro.heading}</h1>
        </div>
        <div className="row">
          <p>{intro.description}</p>
        </div>
        {intro.includeContact && state?.email && <GetInTouch email={state.email} />}
      </section>
    </div>
  );
}