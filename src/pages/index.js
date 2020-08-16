import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/Layout'
import FramerMenu from '../components/FramerMenu'

import Text from '../components/UI/Text'
import { SubContainer, Separator } from '../components/UI/Container'
import { skills, skills2 } from '../data'
import { BaseCSS, Row, Col } from 'styled-bootstrap-grid'

export default ({ data }) => (
	<>
		<BaseCSS />
		<Layout>
			<FramerMenu />
			{/*HERO*/}
			<Row
				className="height-90vh-100vh"
				xsAlignItems="start"
				smAlignItems="start"
				mdAlignItems="center"
			>
				<Col xs={12} md={6}>
					<Text type={{ tag: 'h2' }} weight="bold">
						Web developer
						<br />& Frontend
					</Text>
					<Text type={{ tag: 'p' }} mp="12px 0" p="24px 0" className="paragraph">
						Hello, I am Yaser!
					</Text>
					<Text type={{ tag: 'p' }} className="paragraph">
						I like web development with javascript especially working with React.js{' '}
						<span role="img" aria-label="heart">
							💙
						</span>
					</Text>
					<a
						href="/yaser-cv.pdf"
						target="_blank"
						rel="noopener noreferrer"
						download
						className="btn-download my-2"
					>
						Download CV
					</a>
				</Col>
				<Col xsOrder="first" smOrder="first" mdOrder="last" xs={12} md={6}>
					<Image
						className="banner-img"
						fluid={data.banner.childImageSharp.fluid}
						alt="Me coding"
					/>
				</Col>
			</Row>
			<SubContainer>
				<br />
				{/*ABOUT*/}
				<>
					<Row id="About">
						<Col xsOrder="first" smOrder="first" sm={12}>
							<Text type={{ tag: 'h3' }} weight="bold" mp="36px 0" p="24px 0">
								About me
							</Text>
						</Col>
						<Col xsOrder={4} smOrder={4} sm={12} md={7}>
							<Text type={{ tag: 'h4' }} weight="500" mp="36px 0" p="24px 0">
								System Development Student
							</Text>
							<Text type={{ tag: 'p' }} className="paragraph">
								I love web development especially working with React.js and learning new
								technologies. I also consider myself an enthusiastic person with social
								skills to work as a team or individual.
							</Text>
						</Col>
						<Col
							xsOrder={2}
							smOrder={2}
							mdOrder="last"
							sm={12}
							md={5}
							className="my-1"
						>
							<Image
								className="profile-img"
								fluid={data.profile.childImageSharp.fluid}
								alt="Me coding"
							/>
						</Col>
					</Row>
				</>
				<br />
				{/*PROJECTS*/}
				<Row id="Projects">
					<Col sm={12}>
						<Text type={{ tag: 'h3' }} weight="bold" mp="32px 0" p="24px 0">
							Projects
						</Text>
					</Col>
					<Col sm={12} md={6} style={{ padding: 15 }}>
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
					</Col>
					<Col sm={12} md={6} style={{ padding: 15 }}>
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
					</Col>
				</Row>
				<br />
				{/*SKILLS*/}
				<Row id="Skills">
					<Col sm={12}>
						<Text type={{ tag: 'h3' }} weight="bold" mp="36px 0" p="24px 0">
							My Skills
						</Text>
					</Col>
					<Col xs={6} sm={6}>
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
					</Col>
					<Col xs={6} sm={6}>
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
					</Col>
				</Row>
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
