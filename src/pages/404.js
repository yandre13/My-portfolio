import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import Text from '../components/UI/Text'
import { BaseCSS, Row, Col } from 'styled-bootstrap-grid'
import { Separator } from '../components/UI/Container'

import img404 from '../images/404.svg'

export default () => (
	<>
		<BaseCSS />
		<Layout
			customTitle={`Not found 404`}
			customDescription={`We haven't found that page, go home for reading more`}
			customSiteUrl={`/404`}
		>
			{/*HERO*/}
			<Row
				className="height-90vh-100vh"
				xsAlignItems="start"
				smAlignItems="start"
				mdAlignItems="center"
			>
				<Col xs={12} md={6}>
					<Text type={{ tag: 'h2' }} weight="bold" mp="16px 0" p="40px 0">
						Oops! <br />
						we can't find this page
					</Text>
					<Text
						type={{ tag: 'p' }}
						mp="20px 0"
						p="20px 0 40px"
						className="paragraph"
					>
						Please go home to surf into us
					</Text>
					<Link to="/" className="btn-download">
						Go home
					</Link>
				</Col>
				<Col
					xsOrder="first"
					smOrder="first"
					mdOrder="last"
					xs={12}
					md={6}
					className="my-1"
				>
					<img src={img404} className="banner-404" alt="not found" />
				</Col>
			</Row>
			<Separator mmt={60} mmb={60} mt={100} mb={80} />
		</Layout>
	</>
)
