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
    },
  };
};
