import React from 'react'
import { motion } from 'framer-motion'
import Item from './Item'
import { links } from '../../data'

const variants = {
	open: {
		transition: { duration: 0.6 },
	},
	closed: {
		transition: { duration: 1.3 },
	},
}

export default () => (
	<motion.ul className="mb-sidebar-ul" variants={variants}>
		{links.map((link, i) => (
			<Item key={i} link={link} />
		))}
	</motion.ul>
)
