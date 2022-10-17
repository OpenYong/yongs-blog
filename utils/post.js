import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsFileDir = path.join(process.cwd(), "posts");

export function getPostData(fileName) {
  const postSlug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(postsFileDir, `${postSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
    // slug: fileName.split(".")[0],
  };

  return postData;
}

export function getPostFiles() {
  return fs.readdirSync(postsFileDir);
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}
