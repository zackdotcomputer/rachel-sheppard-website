import classnames from "classnames";
import styles from "../../../styles/home.module.scss";

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
      </section>
    </div>
  );
}
