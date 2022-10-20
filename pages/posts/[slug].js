import Head from "next/head";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostFiles, getPostData } from "../../utils/post";
import { serialize } from "next-mdx-remote/serialize";

const PostDetailPage = ({ metadata, mdxSource }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.excerpt} />
      </Head>
      <PostContent post={metadata} source={mdxSource} />
    </>
  );
};

export async function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.mdx$/, ""));

  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const { metadata, content } = getPostData(slug);
  const mdxSource = await serialize(content);

  return {
    props: { metadata, mdxSource },
    revalidate: 600,
  };
}

export default PostDetailPage;
