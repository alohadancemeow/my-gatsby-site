// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    name: 'alohadancemeow',
    description: "I like blogs",
    keywords: ["tech", "blog", "articles"],
    siteUrl: 'http://localhost:8000/',
    siteImage: 'icon.png', // pop an image in the static folder to use it as the og:image,
    profileImage: 'icon.png',
    lang: `en, th`,
    config: {
      sidebarWidth: 200,
    },
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-mdx-embed`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: '@pauliescanlon/gatsby-theme-terminal',
      options: {
        source: ['posts', 'projects'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76055934-4',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `JetBrains Mono\:100,100i,200,200i,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/dummy-page/`],
      },
    },
  ],
}
