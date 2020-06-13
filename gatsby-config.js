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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Yandre Portfolio`,
				short_name: `Yandre portfolio`,
				start_url: `/`,
				background_color: `#000`,
				theme_color: `#1EC2FF`,
				display: `minimal-ui`,
				icon: `src/images/icon.svg`,
			},
		},
	],
}
