import useSWR from "swr";
import Link from "next/link";

import { FiEye } from "react-icons/fi";

const PostItem = ({ post }) => {
  const { metadata, slug } = post;
  const { title, image, excerpt, date, tags } = metadata;

  const { data: responseData, error } = useSWR(`/api/posts/${slug}`);

  let isLoading = true;
  if (responseData) {
    isLoading = false;
  }

  const formattedDate = new Date(date).toLocaleDateString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const slugPath = `/posts/${slug}`;

  return (
    <li className="bg-white">
      <Link href={slugPath}>
        <a>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="pt-4 pb-4 text-gray-500">{excerpt}</p>
        </a>
      </Link>
      <div className="mb-4 flex space-x-3">
        {tags.map((tag) => {
          return (
            <div key={tag} className="py-1 pr-2">
              <p className="text-sm text-gray-500">#{tag}</p>
            </div>
          );
        })}
      </div>
      <div className="flex space-x-4">
        <time className="text-sm text-gray-500">{formattedDate}</time>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <FiEye />
          <span>{!isLoading ? responseData.postInfo.totalViews : "-"}</span>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
