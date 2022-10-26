/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: "yong",
        mongodb_password: "4LGndmuLkvGybUlk",
        mongodb_clustername: "cluster0",
        mongodb_database: "YongsBlog-dev",
        github_token:
          "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",
      },
    };
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: "yong",
      mongodb_password: "4LGndmuLkvGybUlk",
      mongodb_clustername: "cluster0",
      mongodb_database: "YongsBlog",
      github_token:
        "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",
    },
  };
};
