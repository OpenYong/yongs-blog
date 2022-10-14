import classes from "./PostContent.module.css";

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
        {DUMMY_POST.content}
      </article>
    </>
  );
};

export default PostContent;
