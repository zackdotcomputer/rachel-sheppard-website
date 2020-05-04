import styles from "../../../styles/publications.module.scss";
import HeadlineBlock from "../shared/HeadlineBlock";
import { PublicationProps } from "./Props";
import PublicationRow from "./PublicationRow";

export default function Research({ title, publicationsProjects, scholarLink }: PublicationProps) {
  return (
    <div className={styles.Publications}>
      <HeadlineBlock
        title={title}
        link={scholarLink ? { link: scholarLink, title: "Google Scholar" } : undefined}
        className={styles.PubHero}
      />
      <section className="container">
        {(publicationsProjects ?? []).map((pub, i) => (
          <PublicationRow key={`pub-${i}`} {...pub} />
        ))}
      </section>
    </div>
  );
}
