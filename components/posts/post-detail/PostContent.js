import classes from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  title: "Post 1",
  image: "post-1.png",
  date: "2022-08-02",
  slug: "post-1",
  content: "# This is a first post",
};

const PostContent = (props) => {
  return (
    <>
      <article className={classes.content}>
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
      </article>
    </>
  );
};

export default PostContent;
