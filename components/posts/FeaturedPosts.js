import PostItem from "./PostItem";

const FeaturedPosts = ({posts}) => {
    console.log(posts)
  return (
    <section className="px-4">
      <h1 className="text-2xl font-bold my-4">최신글</h1>
      <ul>
        {posts
          .slice()
          .reverse()
          .map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
      </ul>
    </section>
  )
}


export default FeaturedPosts