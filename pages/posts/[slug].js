import Head from "next/head";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostFiles, getPostData } from "../../utils/post";
import { serialize } from "next-mdx-remote/serialize";

const PostDetailPage = ({ frontMatter, mdxSource }) => {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.excerpt} />
      </Head>
      <PostContent post={frontMatter} source={mdxSource} />
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const { frontMatter, content } = getPostData(slug);
  const mdxSource = await serialize(content);

  return {
    props: { frontMatter, mdxSource },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.mdx$/, ""));

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
    // fallback: 'blocking' // 고민해보자
  };
}

export default PostDetailPage;
