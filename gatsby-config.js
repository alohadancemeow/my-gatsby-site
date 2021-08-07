// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

module.exports = {
  siteMetadata: {
    name: 'alohadancemeow',
    description: "I like blogs, gatsby, react, coding",
    keywords: [
      "tech", 
      "blog", 
      "articles", 
      "review", 
      "gatsby-theme-termianl", 
      "coding",
      "learing gatsby.js",
      "react.js",
      "alohadancemeow",
    ],
    siteUrl: 'https://alohadancemeowblog.gatsbyjs.io/',
    siteImage: 'code3.1.png', // pop an image in the static folder to use it as the og:image,
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
          `JetBrains Mono\:100,100i,200,200i,400,400i,700`, // you can also specify font weights and styles
          // `Athiti\:200,300,400,500,600,700`,
          `Bai Jamjuree\:200,200i,300,300i,400,400i,500,600,700`
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     exclude: [`/dummy-page/`],
    //   },
    // },
  ],
}
