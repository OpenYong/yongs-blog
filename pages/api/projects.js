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

    const data = await response.json();

    const projectsList = [];

    data.forEach((el) => {
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
      repos: projectsList,
    });
  }
}

export default handler;
