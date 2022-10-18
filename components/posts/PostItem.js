import Link from "next/link";

const PostItem = (props) => {
  const { title, image, excerpt, date, slug, tags } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const slugPath = `/posts/${slug}`;

  console.log(tags);

  return (
    <li className="bg-white shadow-md shadow-slate-100 rounded-md p-4 mb-3">
      <Link href={slugPath}>
        <a>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="pt-4 pb-3">{excerpt}</p>
          <div className="flex space-x-3">
            {tags.map((tag) => {
              return (
                <div key={tag} className="bg-slate-100 py-1 px-2 rounded">
                  <p className="text-sm">#{tag}</p>
                </div>
              );
            })}
          </div>
          <time className="text-sm text-gray-500">{formattedDate}</time>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
