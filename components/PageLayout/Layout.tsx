import HeadTags from "./HeadTags";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="rachel">
      <HeadTags />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
