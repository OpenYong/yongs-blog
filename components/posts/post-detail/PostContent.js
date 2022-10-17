import classes from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
import { MDXRemote } from "next-mdx-remote";

import SyntaxHighlighter from "react-syntax-highlighter";

const components = { SyntaxHighlighter };

const PostContent = (props) => {
  const { post, source } = props;

  return (
    <>
      <article className={classes.content}>
        <h1>{post.title}</h1>
        <MDXRemote {...source} components={components} />
        {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
      </article>
    </>
  );
};

export default PostContent;
