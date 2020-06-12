import React from 'react'
import { Header, Nav, StyledToggleTheme, List, Logo } from './styles'
import { Container } from '../UI/Container'
import { links } from '../../data'
import { Link } from 'gatsby'
import useWidth from '../../hooks/useWidth'

export const Navbar = ({ setDark }) => {
	const { width } = useWidth()
	return (
		<>
			<Header>
				<Container>
					<Nav>
						<Link to="/" className="normal-color">
							<Logo>Yandre</Logo>
						</Link>
						{width >= 768 && (
							<List>
								{links.map((link) => (
									<li key={link}>
										<Link to={`#${link}`} className="normal-color">
											{link}
										</Link>
									</li>
								))}
								<StyledToggleTheme onClick={setDark} />
							</List>
						)}
					</Nav>
				</Container>
			</Header>
		</>
	)
}
