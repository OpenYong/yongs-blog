import Head from "next/head";
import { useEffect } from "react";
import AllPosts from "../../components/posts/AllPosts";
import PageHeader from "../../components/ui/PageHeader";

import { getAllPosts } from "../../utils/post";

const PostsPage = ({ posts }) => {
  return (
    <>
      <PageHeader>블로그</PageHeader>
      <p className="my-8 text-center">💻웹개발에 관한 글을 작성합니다.</p>
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
