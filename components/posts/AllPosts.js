import PostItem from "./PostItem";

const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className="px-4">
      <ul className="space-y-12">
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
