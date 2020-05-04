import { attributes } from "../content/cv/index.md";
import CVContents from "../components/PageContents/CV";

export default function CV() {
  return <CVContents {...attributes} />;
}
