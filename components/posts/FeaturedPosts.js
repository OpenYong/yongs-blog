import PostItem from "./PostItem";
import Link from "next/link";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className="px-4 border rounded-lg border-gray-100 m-4">
      <Link href="/posts">
        <a className="float-right pt-6 text-sm text-gray-500">더보기</a>
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-8">최신글</h1>
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

export default FeaturedPosts;
