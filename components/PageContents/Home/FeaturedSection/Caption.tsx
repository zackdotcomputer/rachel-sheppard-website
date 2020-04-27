import ReactMarkdown from "react-markdown";
import { Featured } from "./FeaturedModel";

export default function FeaturedCaption(post: Featured) {
  return (
    <>
      {post.title && <h5 className="title">{post.title}</h5>}
      <div className="desc">
        <ReactMarkdown source={post.description} />
      </div>
    </>
  );
}
