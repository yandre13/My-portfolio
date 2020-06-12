import React from 'react'
import { H1, H2, H3, H4, H5, P, Small } from './styles'

export default ({
	id,
	type,
	align,
	ma,
	weight,
	p,
	mp,
	children,
	className,
}) => {
	return (
		<>
			{type.tag === 'h1' && (
				<H1
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					className={className}
				>
					{children}
				</H1>
			)}
			{type.tag === 'h2' && (
				<H2
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					className={className}
				>
					{children}
				</H2>
			)}
			{type.tag === 'h3' && (
				<H3
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					className={className}
				>
					{children}
				</H3>
			)}
			{type.tag === 'h4' && (
				<H4
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					className={className}
				>
					{children}
				</H4>
			)}
			{type.tag === 'h5' && (
				<H5
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					className={className}
				>
					{children}
				</H5>
			)}
			{type.tag === 'p' && (
				<P
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					className={className}
				>
					{children}
				</P>
			)}
			{type.tag === 'small' && (
				<Small
					id={id}
					align={align}
					ma={ma}
					p={p}
					mp={mp}
					weight={weight}
					className={className}
				>
					{children}
				</Small>
			)}
		</>
	)
}
