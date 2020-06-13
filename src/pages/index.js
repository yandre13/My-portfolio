import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/Layout'
import FramerMenu from '../components/FramerMenu'

import Text from '../components/UI/Text'
import { CustomRow, CustomCol } from '../components/UI/Grid'
import { SubContainer, Separator } from '../components/UI/Container'
import { skills, skills2 } from '../data'

export default ({ data }) => (
	<>
		<Layout>
			<FramerMenu />
			{/*HERO*/}
			<CustomRow mp="0" p="66px 0 0" className="mb-height-90vh">
				<CustomCol nspan={6} mo={1} mp="16px 0 0" mdp="130px 0" p="30vh 0">
					<Text type={{ tag: 'h2' }} weight="bold">
						Web developer
						<br />& Frontend
					</Text>
					<Text type={{ tag: 'p' }} mp="10px 0" p="20px 0" className="paragraph">
						Hello, I am Yaser!
					</Text>
					<Text type={{ tag: 'p' }} mp="0 0 20px" p="0 0 40px" className="paragraph">
						I like web development with javascript especially working with React.js{' '}
						<span role="img" aria-label="heart">
							💙
						</span>
					</Text>
					<a href="/yaser-cv.pdf" target="_blank"
							rel="noopener noreferrer" download className="btn-download">
						Download CV
					</a>
				</CustomCol>
				<CustomCol className="center-text-hero" nspan={6} mp="0px 0 0" p="100px 0">
					<Image
						className="banner-img"
						fluid={data.banner.childImageSharp.fluid}
						alt="Me coding"
					/>
				</CustomCol>
			</CustomRow>
			<SubContainer>
				<br />
				{/*ABOUT*/}
				<CustomRow gutter={30} id="About">
					<CustomCol nspan={12} mp="20px 0 0" p="40px 0 0">
						<Text type={{ tag: 'h3' }} weight="bold" mp="0" p="30px 0">
							About me
						</Text>
					</CustomCol>
					<CustomCol nspan={7} mo={1}>
						<Text type={{ tag: 'h4' }} weight="500" mp="20px 0" p="0 0 36px 0">
							System Development Student
						</Text>
						<Text type={{ tag: 'p' }} className="paragraph" mp="0 0 40px">
							I love web development especially working with React.js and learning new
							technologies. I also consider myself an enthusiastic person with social
							skills to work as a team or individual.
						</Text>
					</CustomCol>
					<CustomCol nspan={5} mp="20px 0 0" p="0">
						<Image
							className="profile-img"
							fluid={data.profile.childImageSharp.fluid}
							alt="Me coding"
						/>
					</CustomCol>
				</CustomRow>
				<br />
				{/*PROJECTS*/}
				<CustomRow gutter={30} id="Projects">
					<CustomCol nspan={12} mp="20px 0 0" p="40px 0 0">
						<Text type={{ tag: 'h3' }} weight="bold" mp="0" p="30px 0">
							Projects
						</Text>
					</CustomCol>
					<CustomCol nspan={6} mp="0" p="0 10px 10px 0">
						<a
							href="https://starter-landing-styled.netlify.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="project-title"
						>
							<BackgroundImage
								Tag="article"
								fluid={data.landing.childImageSharp.fluid}
								className="project-background"
							>
								<Text type={{ tag: 'h4' }} weight="bold">
									Landing page made with styled components and gatsby{' '}
									<span role="img" aria-label="heart">
										💜
									</span>
								</Text>
							</BackgroundImage>
						</a>
					</CustomCol>
					<CustomCol nspan={6} mp="0 0 40px" p="0 0 10px 10px">
						<a
							href="https://blog-gatsby-cms.netlify.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="project-title"
						>
							<BackgroundImage
								Tag="article"
								fluid={data.blog.childImageSharp.fluid}
								className="project-background"
							>
								<Text type={{ tag: 'h4' }} weight="bold">
									Blog made with react, styled components, gatsby and netlify CMS{' '}
									<span role="img" aria-label="hand">
										👌
									</span>
								</Text>
							</BackgroundImage>
						</a>
					</CustomCol>
				</CustomRow>
				<br />
				{/*SKILLS*/}
				<CustomRow mcols="repeat(12, 1fr)" gutter={30} id="Skills">
					<CustomCol nspan={12} mspan={12} mp="20px 0 0" p="40px 0 0">
						<Text type={{ tag: 'h3' }} weight="bold" mp="0" p="30px 0">
							My Skills
						</Text>
					</CustomCol>
					<CustomCol nspan={6} mspan={6} mp="0" p="0 10px 10px 0">
						<ul className="row-skills">
							{skills.map((skill) => (
								<li key={skill.color}>
									<div style={{ backgroundColor: skill.color }} />
									<Text type={{ tag: 'p' }} weight="bold">
										{skill.name}
									</Text>
								</li>
							))}
						</ul>
					</CustomCol>
					<CustomCol nspan={6} mspan={6} mp="0" p="0 0 10px 10px">
						<ul className="row-skills">
							{skills2.map((skill) => (
								<li key={skill.color}>
									<div style={{ backgroundColor: skill.color }} />
									<Text type={{ tag: 'p' }} weight="bold">
										{skill.name}
									</Text>
								</li>
							))}
						</ul>
					</CustomCol>
				</CustomRow>
			</SubContainer>
			<Separator mmt={60} mmb={60} mt={100} mb={80} />
		</Layout>
	</>
)

export const query = graphql`
	query SITE_INDEX {
		banner: file(relativePath: { eq: "banner.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		profile: file(relativePath: { eq: "profile.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid
				}
			}
		}
		landing: file(relativePath: { eq: "landing.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid
				}
			}
		}
		blog: file(relativePath: { eq: "blog.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
