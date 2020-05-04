import classnames from "classnames";

interface Props {
  title: string;
  className?: string;
  link?: { link: string; title: string };
}

export default function HeadlineBlock({ title, className, link }: Props) {
  return (
    <section className={className}>
      <div className="container">
        <h1>{title}</h1>
        {link && (
          <div>
            <a href={link.link} className={classnames("btn", "btn-outline-dark")}>
              {link.title}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
