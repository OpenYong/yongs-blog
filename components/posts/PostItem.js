import Link from "next/link";
import classes from "./PostItem.module.css";

const PostItem = (props) => {
  return (
    <li>
      <Link>
        <a>
          <h1>타이틀</h1>
          <time>시간</time>
          <p>요약</p>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
