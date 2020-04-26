import classnames from "classnames";
import Link from "next/link";
import styles from "../../../styles/home.module.scss";

export default function GetInTouch({ email }: { email: string }) {
  return (
    <div className="row">
      <Link href={`mailto:${email}`}>
        <a className={classnames("btn", "btn-outline-dark", styles.GetInTouch)}>Get in Touch</a>
      </Link>
    </div>
  );
}
