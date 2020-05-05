import classnames from "classnames";

interface Props {
  href: string;
}

export default function RoundButton({ href, children }: React.PropsWithChildren<Props>) {
  return (
    <a href={href} className={classnames("btn", "btn-outline-dark", "btn-round")}>
      {children}
    </a>
  );
}
