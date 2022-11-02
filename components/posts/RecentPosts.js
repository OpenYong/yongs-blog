import PostItem from "./PostItem";
import Link from "next/link";

const RecentPosts = ({ posts }) => {
  return (
    <section className="m-4 rounded-lg border border-gray-100 px-4">
      <Link href="/posts">
        <a className="float-right pt-6 text-sm text-gray-500">더보기</a>
      </Link>
      <h1 className="mt-4 mb-8 text-2xl font-bold">최신글</h1>
      <ul className="space-y-12 pb-4">
        {posts
          .slice(-3)
          .reverse()
          .map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
      </ul>
    </section>
  );
};

export default RecentPosts;
