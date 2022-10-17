import classes from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const { post } = props;

  return (
    <>
      <article className={classes.content}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </>
  );
};

export default PostContent;
