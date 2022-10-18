import Link from "next/link";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const slugPath = `/posts/${slug}`;

  return (
    <li className="bg-white shadow-md shadow-slate-100 rounded-md px-4 mb-3">
      <Link href={slugPath}>
        <a>
          <h1 className="text-xl font-bold py-3">{title}</h1>
          <p>{excerpt}</p>
          <time className="text-sm text-gray-500">{formattedDate}</time>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
