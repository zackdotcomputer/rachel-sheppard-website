import styles from "../../../styles/research.module.scss";
import HeadlineBlock from "../shared/HeadlineBlock";
import { ResearchProps } from "./Props";
import ResearchProjectRow from "./ResearchProjectRow";

export default function Research({ title, researchProjects }: ResearchProps) {
  return (
    <div className={styles.Research}>
      <HeadlineBlock title={title} className={styles.ResearchHero} />
      <section className="container">
        {researchProjects.map((project, i) => (
          <ResearchProjectRow key={`project-${i}`} {...project} />
        ))}
      </section>
    </div>
  );
}
