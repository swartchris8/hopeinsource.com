module.exports = {
  siteMetadata: {
    title: 'Daily Green Podcast - Bringing you green options',
    author: 'Shay Adetunji & Chris Swart',
    description: 'How can going green help you? The Daily Green Podcast looks at green companies that could help you.',
    gitOrg: 'swartchris8',
    gitRepo: 'http://romantic-rosalind-50c19e.netlify.com/',
    siteUrl: 'https://romantic-rosalind-50c19e.netlify.com/',
    social: {
      twitter: '@swartchris8',
    },
    feed: {
      rss: 'https://feeds.simplecast.com/9H3Jd25O',
      google: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvNzA0OS9yc3M%3D',
      apple: 'https://itunes.apple.com/us/podcast/hope-in-source/id1437677655',
      spotify: 'https://open.spotify.com/show/5EXwiyKzPrrucncKyrHy0B',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-152383042-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daily Green`,
        short_name: `Daily Green`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/green_icon.jpeg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-twitter`
  ],
}
