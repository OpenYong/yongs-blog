import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostFiles, getPostData } from "../../utils/post";
import { serialize } from "next-mdx-remote/serialize";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} source={props.mdxSource} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);
  const mdxSource = await serialize(post.content);

  return {
    props: { post, mdxSource },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.mdx$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
    // fallback: 'blocking' // 고민해보자
  };
}

export default PostDetailPage;
