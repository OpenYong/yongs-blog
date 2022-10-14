import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsFileDir = path.join(process.cwd(), "posts");

const getPostData = (fileName) => {
  const filePath = path.join(postsFileDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, "");

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
};
