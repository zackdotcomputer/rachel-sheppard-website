import styles from "../../../styles/cv.module.scss";
import HeadlineBlock from "../shared/HeadlineBlock";
import { CVProps } from "./Props";
import CVBlockRow from "./CVBlockRow";

export default function Research({ title, cvBlocks, cvPDF }: CVProps) {
  return (
    <div className={styles.Publications}>
      <HeadlineBlock
        title={title}
        link={cvPDF ? { link: cvPDF, title: "Download PDF" } : undefined}
        className={styles.CVHero}
      />
      <section className="container">
        {(cvBlocks ?? []).map((cv, i) => (
          <CVBlockRow key={`cv-${i}`} {...cv} />
        ))}
      </section>
    </div>
  );
}
