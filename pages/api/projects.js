async function handler(req, res) {
  if (req.method === "GET") {
    const response = await fetch(
      "https://api.github.com/users/OpenYong/repos",
      {
        headers: {
          Authorization: "Token " + process.env.github_token,
        },
      }
    );

    if (!response.ok) {
      throw new Error("오류 발생!");
    }

    const responseData = await response.json();

    const projectsList = [];

    responseData
      .filter((data) => {
        return data.topics.includes("blog");
      })
      .sort((projectA, projectB) => {
        return new Date(projectA.pushed_at) > new Date(projectB.pushed_at)
          ? 1
          : -1;
      })
      .forEach((el) => {
        projectsList.push({
          name: el.name,
          stars: el.stargazers_count,
          url: el.html_url,
          description: el.description,
          language: el.language,
          stargazers_url: el.stargazers_url,
          homepage: el.homepage,
          topics: el.topics,
        });
      });

    res.status(200).json({
      projectRepos: projectsList,
    });
  }
}

export default handler;
