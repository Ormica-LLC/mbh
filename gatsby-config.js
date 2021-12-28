const siteMetadata = require(`./site-metadata.json`)

module.exports = {
	pathPrefix: `/`,
	siteMetadata,
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-source-data`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {},
		},
		{
			resolve: `gatsby-remark-page-creator`,
			options: {},
		},
		{
			resolve: `@stackbit/gatsby-plugin-menus`,
			options: {
				sourceUrlPath: `fields.url`,
				pageContextProperty: `menus`,
			},
		},
		{
			resolve: `gatsby-plugin-facebook-pixel`,
			options: {
				pixelId: `1044026376379392`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `MiaBuysHouses.com`,
				short_name: `MiaBuysHouses`,
				start_url: `/`,
				background_color: `#ff2ecc`,
				theme_color: `#ff2ecc`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/images/icon.png`, // This path is relative to the root of the site.
				// An optional attribute which provides support for CORS check.
				// If you do not provide a crossOrigin option, it will skip CORS for manifest.
				// Any invalid keyword or empty string defaults to `anonymous`
				crossOrigin: `use-credentials`,
			},
		},
	],
}
