import classnames from "classnames";
import styles from "../../../styles/home.module.scss";

export default function GetInTouch({ email }: { email: string }) {
  return (
    <div className="row">
      <a
        href={`mailto:${email}`}
        className={classnames("btn", "btn-outline-dark", "btn-round", styles.GetInTouch)}
      >
        Get in Touch
      </a>
    </div>
  );
}
