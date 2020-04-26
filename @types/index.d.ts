declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.md" {
  export const attributes: any;
  export const react: JSXElementConstructor<{}>;
  export const body: string | undefined;
  export const bodyBegin: number;
  export const frontmatter: string | undefined;
}
