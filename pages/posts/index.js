import Head from "next/head";
import { useEffect } from "react";
import AllPosts from "../../components/posts/AllPosts";
import PageHeader from "../../components/ui/PageHeader";

import { getAllPosts } from "../../utils/post";

const PostsPage = ({ posts }) => {
  return (
    <>
      <PageHeader>λΈλ‘κ·Έ</PageHeader>
      <p className="my-8 text-center">π»μΉκ°λ°μ κ΄ν κΈμ μμ±ν©λλ€.</p>
      <AllPosts posts={posts} />
    </>
  );
};

export async function getStaticProps(context) {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1200,
  };
}

export default PostsPage;
