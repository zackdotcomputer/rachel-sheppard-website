import React from "react";

interface ClassProp {
  className?: string;
}

interface HTMLProp {
  content: string;
}

export const HTMLContent = ({ content, className }: HTMLProp & ClassProp) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ children, className }: React.PropsWithChildren<ClassProp>) => (
  <div className={className}>{children}</div>
);

export default Content;
