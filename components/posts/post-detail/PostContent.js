import { MDXRemote } from "next-mdx-remote";
import { useState } from "react";
import { FiEye, FiHeart } from "react-icons/fi";

import useSWR, { useSWRConfig } from "swr";

const PostContent = (props) => {
  const { post, source, slug } = props;

  const { mutate } = useSWRConfig();

  const { data: responseData, error } = useSWR(`/api/posts/${slug}`);

  const [isLikeCliked, setIsLikeCliked] = useState(false);

  let isLoading = true;
  if (responseData) {
    isLoading = false;
  }

  const likeBtnHandler = () => {
    if (isLikeCliked) {
      return;
    }
    mutate(
      `/api/posts/${slug}`,
      async () => {
        const result = await fetch(`/api/posts/likes/${slug}`, {
          method: "PUT",
        });
        if (result.status === 200) {
          const resultData = await result.json();
          const newLikes = resultData.postInfo.likes + 1;
          setIsLikeCliked(true);
          return {
            postInfo: {
              ...responseData.postInfo,
              likes: newLikes,
            },
          };
        }
      },
      { revalidate: false }
    );
  };

  return (
    <div className="">
      <h1 className="my-12 mx-4 text-4xl font-bold md:mx-0 md:text-center">
        {post.title}
      </h1>
      <article className="prose mx-auto bg-white px-4 lg:prose-lg ">
        <div className="flex justify-between">
          <time className="text-sm text-gray-500">{post.date}</time>
          <div className="flex h-8 items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <FiEye />
              <span>{!isLoading ? responseData.postInfo.totalViews : "-"}</span>
            </div>
            <button
              onClick={likeBtnHandler}
              className={`flex w-16 items-center justify-center space-x-2 rounded-xl py-1 px-3 duration-300  ${
                isLikeCliked ? "text-rose-500" : ""
              } hover:scale-110 hover:bg-rose-100/70 hover:text-rose-500 active:border-2 active:border-rose-200`}
            >
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
