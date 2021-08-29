// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ikbk.net',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './posts/*.adoc',
        asciidoc: {

        },
      },
    },
  ],
  templates: {
    Post: '/posts/:slug'
  },
  transformers: {
    asciidoc: {
      safe: 'safe',
      icons: 'font',
      attributes: {
        imagesdir: '/assets/img',
      },
    },
  },
}
