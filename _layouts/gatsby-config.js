module.exports = {
    // pathPrefix: `/politic`,
    pathPrefix: `/`,
    siteMetadata: {
      title: `Foam`,
    },
    plugins: [
      {
        resolve: `gatsby-theme-garden`,
        options: {
          rootNote: "/readme",
          contentPath: `${__dirname}/../docs`,
          ignore: [
            "**/_layouts/**",
            "**/.git/**",
            "**/.github/**",
            "**/.vscode/**",
          ],
        },
      },
    ],
  };