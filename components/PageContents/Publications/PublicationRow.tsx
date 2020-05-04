import { Publication } from "./Props";
import styles from "../../../styles/publications.module.scss";

export default function ResearchProjectRow({}: Publication) {
  return <article className={styles.PublicationRow}></article>;
}
