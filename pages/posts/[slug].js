import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostFiles, getPostData } from "../../lib/post-util";

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);

  return {
    props: { post },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostFiles();

  const slugs = postFileNames.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
    // fallback: 'blocking' // 고민해보자
  };
}

export default PostDetailPage;
