import styles from "../../../../styles/home.module.scss";
import { useState, useMemo } from "react";
import ReactDOMServer from "react-dom/server";

import Carousel, { Modal, ModalGateway } from "react-images";
import { Featured } from "./FeaturedModel";
import FeaturedCaption from "./Caption";
import FeaturedPost from "./Post";

export default function FeaturedSection({ posts }: { posts: Featured[] }) {
  const [selectedModalIndex, setModalIndex] = useState<number | undefined>(undefined);

  const renderPosts = (ps: Featured[]) => {
    return (ps ?? []).map((p) => {
      const caption: string = ReactDOMServer.renderToString(<FeaturedCaption {...p} />);
      return {
        caption,
        source: p.image
      };
    });
  };

  // NOTE(zack): Because of the bug linked below, we have to memoize on client only.
  // https://github.com/facebook/react/issues/16416
  let carouselContents;
  if (typeof window === "undefined") {
    carouselContents = renderPosts(posts);
  } else {
    carouselContents = useMemo(() => {
      return renderPosts(posts);
    }, [posts]);
  }

  return (
    <section className={styles.FeaturedSection}>
      {posts.map((post, i) => (
        <FeaturedPost
          post={post}
          key={`post-${i}`}
          onClick={() => {
            setModalIndex(i);
          }}
        />
      ))}
      <ModalGateway>
        {selectedModalIndex !== undefined ? (
          <Modal onClose={() => setModalIndex(undefined)}>
            <Carousel views={carouselContents} currentIndex={selectedModalIndex} />
          </Modal>
        ) : null}
      </ModalGateway>
    </section>
  );
}
