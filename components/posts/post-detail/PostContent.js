import { MDXRemote } from "next-mdx-remote";

import SyntaxHighlighter from "react-syntax-highlighter";

const components = { SyntaxHighlighter };

const PostContent = (props) => {
  const { post, source } = props;

  return (
    <>
      <article className="bg-white">
        <h1 className="text-3xl font-bold mt-12 mb-6">{post.title}</h1>
        <time className="text-gray-500 italic">{post.date}</time>
        <div className="prose">
          <MDXRemote {...source} components={components} className="prose"/>
        </div>
        {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
      </article>
    </>
  );
};

export default PostContent;
