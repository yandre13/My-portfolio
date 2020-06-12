const siteMetadata = {
	title: `Yandre`,
	description: `Pesonal portfolio with my skills and some projects.`,
	image: `/image.png`,
	siteUrl: `https://yandre.netlify.com/`,
	siteLanguage: `en`,
	siteLocale: `en`,
	author: `@yandre`,
}

module.exports = {
	siteMetadata,
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-styled-components-dark-mode`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/src/images/`, name: `images` },
		},
	],
}
