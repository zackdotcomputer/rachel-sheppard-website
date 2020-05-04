import { ResearchProject } from "./Props";
import ReactMarkdown from "react-markdown";
import styles from "../../../styles/research.module.scss";

export default function ResearchProjectRow({ image, title, description, dates }: ResearchProject) {
  return (
    <article className={styles.ResearchSection}>
      <div className={styles.Image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.Contents}>
        <h3>{title}</h3>
        {dates && <h5>{dates}</h5>}
        {description && <ReactMarkdown source={description} />}
      </div>
    </article>
  );
}
