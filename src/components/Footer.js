import React from 'react'
import Text from './UI/Text'
import { ContainerFooter } from './UI/Container'

const Footer = () => (
	<ContainerFooter>
		<Text
			type={{ tag: 'h3' }}
			weight={'400'}
			ma={'center'}
			align={'center'}
			mp={'0'}
			p={'0 0 30px 0'}
			className="paragraph-serif"
		>
			"You can't use up creativity <br />
			the more you use the more you have."
		</Text>

		<Text ma={'center'} align={'center'} type={{ tag: 'small' }} mp={'40px 0'}>
			Made with 🖤 for a better web by @yandre13 - {new Date().getFullYear()}
		</Text>
	</ContainerFooter>
)
export default Footer
