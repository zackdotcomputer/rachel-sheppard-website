interface Props {
  title: string;
  className?: string;
}

export default function HeadlineBlock({ title, className }: Props) {
  return (
    <section className={className}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </section>
  );
}
