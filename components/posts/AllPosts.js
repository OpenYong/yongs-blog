import PostItem from "./PostItem";

import classes from "./AllPosts.module.css";

const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className={classes.posts}>
      <h1>전체 게시글</h1>
      <ul>
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
      </ul>
    </section>
  );
};

export default AllPosts;
