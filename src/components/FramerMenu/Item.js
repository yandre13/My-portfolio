import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			opacity: { duration: 3 },
		},
	},
	closed: {
		y: 40,
		opacity: 0,
		transition: {
			opacity: { duration: 0.4 },
			y: { stiffness: 1000, damping: 40 },
		},
	},
}

export default ({ link }) => (
	<motion.li
		className="mb-sidebar-li"
		variants={variants}
		whileTap={{ scale: 0.9 }}
	>
		<Link to={`#${link}`} style={{ width: '100%' }} className="normal-color">
			{link}
		</Link>
	</motion.li>
)
