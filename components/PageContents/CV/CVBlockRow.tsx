import { CVBlock } from "./Props";
import styles from "../../../styles/cv.module.scss";

export default function CVBlockRow({}: CVBlock) {
  return <article className={styles.CVBlock}></article>;
}
