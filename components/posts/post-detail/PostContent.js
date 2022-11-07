import { MDXRemote } from "next-mdx-remote";
import { FiEye, FiHeart } from "react-icons/fi";

import useSWR from "swr";

const PostContent = (props) => {
  const { post, source, slug } = props;

  const { data: responseData, error } = useSWR(`/api/posts/${slug}`);
  console.log(responseData);

  let isLoading = true;
  if (responseData) {
    isLoading = false;
  }

  return (
    <div className="">
      <h1 className="my-12 mx-4 text-4xl font-bold md:mx-0 md:text-center">
        {post.title}
      </h1>
      <article className="prose mx-auto bg-white px-4 lg:prose-lg ">
        <div className="flex justify-between">
          <time className="italic text-gray-500">{post.date}</time>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <FiEye />
              <span>{!isLoading ? responseData.postInfo.totalViews : "-"}</span>
            </div>
            <button className="flex items-center justify-center space-x-2 rounded-xl py-1 px-3 duration-300 hover:scale-110 hover:bg-rose-100/70 hover:text-rose-500">
              <FiHeart className="animate-bounce" />
              <span>{!isLoading ? responseData.postInfo.likes : "-"}</span>
            </button>
          </div>
        </div>
        <div className="">
          <MDXRemote {...source} />
        </div>
      </article>
    </div>
  );
};

export default PostContent;
