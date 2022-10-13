import Link from "next/link";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const slugPath = `/posts/${slug}`;

  return (
    <li>
      <Link href={slugPath}>
        <a>
          <h1>{title}</h1>
          <p>{excerpt}</p>
          <time>{formattedDate}</time>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
