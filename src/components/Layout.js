import React from 'react'
import SEO from './SEO'

import useSiteMetadata from '../hooks/useSiteMetadata'
import { GlobalStyles } from '../styles'
import { MainContainer } from './UI/Container'
import Header from './Header'
import Footer from './Footer'

if (typeof window !== 'undefined') {
	// eslint-disable-next-line global-require
	require('smooth-scroll')('a[href*="#"]')
}

export default ({ children }) => {
	const {
		title,
		description,
		author,
		siteLanguage,
		siteUrl,
		image,
	} = useSiteMetadata()

	return (
		<>
			<SEO
				title={title}
				description={description}
				author={author}
				lang={siteLanguage}
				siteUrl={siteUrl}
				image={image}
			/>
			<GlobalStyles />
			<Header />
			<MainContainer>{children}</MainContainer>
			<Footer />
		</>
	)
}
