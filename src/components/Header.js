import React, { useContext, useEffect } from 'react'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'
import { Navbar } from './Navbar'
//Header for dark mode
const Header = () => {
	const themeContext = useContext(ThemeManagerContext)
	const toggleDark = () => themeContext.toggleDark()

	useEffect(() => {
		if (typeof window !== `undefined`) {
			const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'DARK'
				: 'LIGHT'
			themeContext.changeThemeSetting(dark)
		} else {
			themeContext.changeThemeSetting('LIGHT')
		}
	}, []) //eslint-disable-line

	return (
		<header id="Home">
			<Navbar setDark={toggleDark} />
		</header>
	)
}

export default Header
