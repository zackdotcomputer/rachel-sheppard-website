import { Publication } from "./Props";
import styles from "../../../styles/publications.module.scss";
import ReactMarkdown from "react-markdown";
import RoundButton from "../shared/RoundButton";

export default function ResearchProjectRow({ title, authors, fileCopy }: Publication) {
  return (
    <article className={styles.PublicationRow}>
      <div className={styles.Contents}>
        <h3>{title}</h3>
        {authors && <ReactMarkdown source={authors} />}
        {fileCopy && <RoundButton href={fileCopy}>Download</RoundButton>}
      </div>
    </article>
  );
}
