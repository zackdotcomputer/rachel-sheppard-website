import styles from "../../../styles/home.module.scss";
import HomeIntro, { Intro } from "./Intro";
import FeaturedSection, { Featured } from "./FeaturedSection";

export interface HomeProps {
  intro: Intro;
  featured?: Featured[];
}

export default function Home({ intro, featured }: HomeProps) {
  return (
    <div className={styles.Home}>
      <HomeIntro {...intro} />
      <FeaturedSection posts={featured ?? []} />
    </div>
  );
}
