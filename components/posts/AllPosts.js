import PostItem from "./PostItem";

const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className="px-4">
      <h1 className="text-2xl font-bold">전체글</h1>
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
