import Head from "next/head";
import AllPosts from "../components/posts/AllPosts";

const HomaPage = () => {
  return (
    <>
      <Head>
        <title>Yong's 블로그</title>
        <meta
          name="description"
          content="안녕하세요. 프론트엔드 관련 블로그입니다!"
        />
      </Head>
      <AllPosts />
    </>
  );
};

export default HomaPage;
