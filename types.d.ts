declare module "gatsby-remark-relative-images" {
  function fmImagesToRelative(node: any): void;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
