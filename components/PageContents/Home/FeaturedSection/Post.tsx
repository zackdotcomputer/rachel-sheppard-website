import styles from "../../../../styles/home.module.scss";
import { Featured } from "./FeaturedModel";
import Caption from "./Caption";

export default function FeaturedPost({
  post,
  onClick
}: {
  post: Featured;
  onClick?: VoidFunction;
}) {
  return (
    <article className={styles.FeaturedPost} onClick={onClick}>
      <img src={post.image} alt={post.title ?? post.description ?? "An image I'm sharing"} />
      <div className="post-info">
        <Caption {...post} />
      </div>
    </article>
  );
}
