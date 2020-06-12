import { useState, useEffect } from 'react'

const useWidth = () => {
	const [width, setWidth] = useState(0)
	useEffect(() => {
		if (typeof window !== `undefined`) {
			setWidth(window.innerWidth)
			const watchResize = () => {
				setWidth(window.innerWidth)
			}
			window.addEventListener('resize', watchResize)
			return () => {
				window.removeEventListener('resize', watchResize)
			}
		}
	}, [])

	return { width }
}

export default useWidth
