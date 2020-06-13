import React from 'react'
import { motion, useCycle } from 'framer-motion'
import Navigation from './Navigation'
import Text from '../UI/Text'
import ButtonsTheme from './ButtonsTheme'
import useWidth from '../../hooks/useWidth'

const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="white"
		strokeLinecap="round"
		{...props}
	/>
)

const sidebar = {
	open: {
		height: '62vh',
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
	closed: {
		height: '0%',
		opacity: 0.3,
		y: 500,
		transition: {
			duration: 1.3,
		},
	},
}
export default () => {
	const [isOpen, toggleOpen] = useCycle(false, true),
		{ width } = useWidth()
	return (
		<>
			{width < 768 && (
				<>
					<button aria-label="Open menu" className="mb-menu-toggle" onClick={() => toggleOpen()}>
						<svg width="23" height="23" viewBox="0 0 23 23">
							<Path
								initial={false}
								animate={{ d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' }}
							/>
							<Path
								initial={false}
								d="M 2 9.423 L 20 9.423"
								animate={{ opacity: isOpen ? 0 : 1 }}
								transition={{ duration: 0.1 }}
							/>
							<Path
								initial={false}
								animate={{
									d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346',
								}}
							/>
						</svg>
					</button>
					{isOpen && <div className="backdrop" onClick={() => toggleOpen()} />}
					<motion.div
						className="mb-background-sidemenu"
						initial="closed"
						animate={isOpen ? 'open' : 'closed'}
						variants={sidebar}
					>
						<div className="mb-title-menu">
							<Text type={{ tag: 'h4' }} mp="13px 24px" p="16px 24px" weight="bold">
								Menu
							</Text>
						</div>
						<Navigation />
						<ButtonsTheme />
					</motion.div>
				</>
			)}
		</>
	)
}
