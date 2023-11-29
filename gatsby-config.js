/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ga`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", 
  "gatsby-plugin-styled-components",
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}