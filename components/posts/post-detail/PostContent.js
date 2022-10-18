import { MDXRemote } from "next-mdx-remote";

// import SyntaxHighlighter from "react-syntax-highlighter";

import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const components = { SyntaxHighlighter };
const data = { style: atomDark }

const PostContent = (props) => {
  const { post, source } = props;

  return (
    <>
      <article className="bg-white prose lg:prose-xl px-4">
        <h1 className="text-4xl font-bold mt-12 mb-6">{post.title}</h1>
        <time className="text-gray-500 italic">{post.date}</time>
        <div className="">
          <MDXRemote {...source} components={components} scope={data}/>
        </div>
      </article>
    </>
  );
};

export default PostContent;
