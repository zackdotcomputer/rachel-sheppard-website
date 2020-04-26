import { Map } from "immutable";

type CMSPreviewElement = React.JSXElementConstructor<{ entry: Map<string, any> }>;

declare global {
  interface Window {
    CMS: {
      registerPreviewTemplate(templateName: string, template: CMSPreviewElement);
    };
  }
}
