import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";

import { getAllPosts } from "../../utils/post";

const postsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Yong's 블로그</title>
        <meta
          name="description"
          content="안녕하세요. 프론트엔드 관련 블로그입니다!"
        />
      </Head>
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

export default postsPage;
