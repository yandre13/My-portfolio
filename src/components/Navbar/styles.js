import styled from 'styled-components'
import moon from '../../images/moon.svg'
import sun from '../../images/sun.svg'

export const Header = styled.div`
	position: relative;
	width: 100%;
	height: 56px;
	display: flex;
	justify-content: space-between;
	@media screen and (min-width: 768px) {
		height: 66px;
		position: fixed;
		z-index: 50;
		background: ${(props) => (props.theme.isDark ? '#000' : '#fff')};
		@supports (backdrop-filter: saturate(180%) blur(25px)) {
			& {
				background: transparent;
				backdrop-filter: saturate(180%) blur(16px);
				border: 0;
			}
		}
	}
`

export const Nav = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Logo = styled.h1`
	width: 106px;
	height: 42px;
	font-size: 1.6rem;
	font-weight: 500;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const List = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
	list-style: none;
	li {
		padding: 1rem;
		font-size: 1.2rem;
	}
`

export const StyledToggleTheme = styled.button`
	border: none;
	outline: none !important;
	width: 24px;
	height: 24px;
	background-color: transparent;
	background: ${(props) =>
		props.theme.isDark ? `url(${sun})` : `url(${moon})`};
	background-position: 2px;
	background-size: 22px;
	background-repeat: no-repeat;
	transition: all ease-in 0.7s;
	outline: none;
	margin-left: 1rem;
	cursor: pointer;
	:focus {
		outline: none !important;
	}
`
