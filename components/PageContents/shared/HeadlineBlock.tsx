import classnames from "classnames";
import RoundButton from "./RoundButton";

interface Props {
  title: string;
  className?: string;
  link?: { link: string; title: string };
}

export default function HeadlineBlock({ title, className, link }: Props) {
  return (
    <section className={className}>
      <div className="container">
        <div className={classnames("headline-block")}>
          <h1>{title}</h1>
          {link && (
            <div>
              <RoundButton href={link.link}>{link.title}</RoundButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
