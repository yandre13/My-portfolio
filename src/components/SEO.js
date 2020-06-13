import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({
	title,
	description,
	author = '@yandre',
	lang = 'en',
	siteUrl,
	keywords = [],
	image,
}) => {
	return (
		<Helmet
			htmlAttributes={{ lang }}
			title={title}
			titleTemplate={`%s | Portfolio`}
			meta={[
				{ name: 'author', content: author },
				{ name: 'description', content: description },

				{ name: 'twitter:title', content: title },
				{ name: 'twitter:description', content: description },
				{ name: 'twitter:site', content: title },
				{ name: 'twitter:creator', content: author },
				{ name: 'twitter:image', content: image },

				{ property: 'og:title', content: title },
				{ property: 'og:description', content: description },
				{ property: 'og:site_name', content: title },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: siteUrl },
				{ property: 'og:image', content: image },

				{ name: 'viewport', content: 'width=device-width, maximum-scale=5' },
			].concat(
				keywords.length > 0
					? {
							name: 'keywords',
							content: keywords.join(', '),
					  }
					: []
			)}
		/>
	)
}

export default SEO
