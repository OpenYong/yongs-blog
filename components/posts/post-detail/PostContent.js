import { MDXRemote } from "next-mdx-remote";
import { FiEye } from "react-icons/fi";

import useSWR from "swr";

const PostContent = (props) => {
  const { post, source, slug } = props;

  const { data: responseData, error } = useSWR(`/api/posts/${slug}`);

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
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <FiEye />
            <span>{!isLoading ? responseData.postInfo.totalViews : "-"}</span>
            <div></div>
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
