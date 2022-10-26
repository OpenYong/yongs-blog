import { MDXRemote } from "next-mdx-remote";

const PostContent = (props) => {
  const { post, source } = props;

  return (
    <>
      <h1 className="my-12 mx-4 text-4xl font-bold">{post.title}</h1>
      <article className="prose bg-white px-4 lg:prose-lg">
        <time className="italic text-gray-500">{post.date}</time>
        <div className="">
          <MDXRemote {...source} />
        </div>
      </article>
    </>
  );
};

export default PostContent;
