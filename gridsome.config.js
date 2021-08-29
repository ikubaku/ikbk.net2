// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "ikbk.net",
  permalinks: {
    slugify(value) {
      let validSlugPattern = /^[^-_]+([-_][^-_]+)*$/;
      if (validSlugPattern.test(value)) {
        return value;
      }
      import("@sindresorhus/slugify").then((module) => {
        return module.default(value);
      });
    },
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./posts/*.adoc",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "StaticPage",
        baseDir: "./static_pages",
        path: "./**/*.adoc",
      },
    },
  ],
  templates: {
    Post: "/posts/:slug",
  },
  transformers: {
    asciidoc: {
      safe: "safe",
      icons: "font",
      attributes: {
        imagesdir: "/assets/img",
      },
    },
  },
};
