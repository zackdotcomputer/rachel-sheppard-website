import { attributes } from "../content/index.md";
import HomeContents from "../components/PageContents/Home/Template";

export default function Home() {
  return <HomeContents {...attributes} />;
}
