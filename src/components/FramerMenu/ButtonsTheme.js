import React, { useContext } from 'react'
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode'

const ButtonsTheme = () => {
	const themeContext = useContext(ThemeManagerContext)
	const toggleDark = () => themeContext.toggleDark()
	return (
		<ul className="list-buttons">
			<span />
			<li>
				<button className="round-button" onClick={toggleDark} />
			</li>
		</ul>
	)
}

export default ButtonsTheme
