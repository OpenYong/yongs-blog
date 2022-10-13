import Head from "next/head";
import AllPosts from "../components/posts/AllPosts";

const DUMMY_POSTS = [
  {
    title: "Post 1",
    image: "post-1.png",
    excerpt:
      "테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 테스트 글 ",
    date: "2022-08-02",
    slug: "post-1",
  },
  {
    title: "Post 2",
    image: "",
    excerpt: "테스트 글 테스트",
    date: "2022-08-02",
    slug: "post-2",
  },
  {
    title: "Post 3",
    image: "post-3.png",
    excerpt: "테스트 글 테스트33",
    date: "2022-08-02",
    slug: "post-3",
  },
];

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
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomaPage;
