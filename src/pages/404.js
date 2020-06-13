import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import Text from '../components/UI/Text'
import { CustomRow, CustomCol } from '../components/UI/Grid'
import { Separator } from '../components/UI/Container'

import img404 from '../images/404.svg'

export default () => (
	<>
		<Layout
			customTitle={`Not found 404`}
			customDescription={`We haven't found that page, go home for reading more`}
			customSiteUrl={`/404`}
		>
			{/*HERO*/}
			<CustomRow mp="0" p="66px 0 0" className="mb-height-90vh">
				<CustomCol nspan={6} mo={1} mp="0" mdp="130px 0" p="20vh 0">
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
				</CustomCol>
				<CustomCol nspan={6} mp="0" p="100px 0">
					<img src={img404} className="banner-404" alt="not found" />
				</CustomCol>
			</CustomRow>
			<Separator mmt={60} mmb={60} mt={100} mb={80} />
		</Layout>
	</>
)
