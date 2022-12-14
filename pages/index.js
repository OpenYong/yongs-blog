import Head from "next/head";

import Hero from "../components/hompage/Hero";
import RecentPosts from "../components/posts/RecentPosts";

import { getAllPosts } from "../utils/post";

const HomaPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Yong's 블로그</title>
        <meta
          name="description"
          content="안녕하세요. 프론트엔드 관련 블로그입니다!"
        />
      </Head>
      <Hero />
      <RecentPosts posts={posts} />
    </>
  );
};

export async function getStaticProps(context) {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default HomaPage;
