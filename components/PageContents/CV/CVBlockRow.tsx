import { CVBlock } from "./Props";
import styles from "../../../styles/cv.module.scss";
import CVIcon from "./CVIcon";
import ReactMarkdown from "react-markdown";

export default function CVBlockRow({ icon, title, caveat, text }: CVBlock) {
  return (
    <article className={styles.CVBlock}>
      <div className="row">
        <div className={styles.Icon}>
          <CVIcon icon={icon} />
        </div>
        <div className={styles.Contents}>
          <h3>{title}</h3>
          {caveat && <p className={styles.Caveat}>{caveat}</p>}
          {text && <ReactMarkdown source={text} />}
        </div>
      </div>
    </article>
  );
}
