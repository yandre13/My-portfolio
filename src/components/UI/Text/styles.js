import styled from 'styled-components'

export const H1 = styled.h1`
	font-size: 28px;
	line-height: 34px;
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	text-align: ${(props) => (props.ma ? props.ma : 'left')};
	padding: ${(props) => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		text-align: ${(props) => (props.align ? props.align : 'left')};
		padding: ${(props) => props.p && props.p};
	}
`
export const H2 = styled.h2`
	font-size: 38px;
	line-height: 44px;
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	text-align: ${(props) => (props.ma ? props.ma : 'left')};
	padding: ${(props) => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		font-size: 44px;
		line-height: 50px;
		text-align: ${(props) => (props.align ? props.align : 'left')};
		padding: ${(props) => props.p && props.p};
	}
	@media screen and (min-width: 960px) {
		font-size: 52px;
		line-height: 58px;
	}
	@media screen and (min-width: 1200px) {
		font-size: 64px;
		line-height: 72px;
	}
	@media screen and (min-width: 1440px) {
		font-size: 72px;
		line-height: 78px;
	}
`

export const H3 = styled.h3`
	font-size: 32px;
	line-height: 38px;
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	text-align: ${(props) => (props.ma ? props.ma : 'left')};
	padding: ${(props) => props.mp && props.mp};
	@media screen and (min-width: 768px) {
		font-size: 38px;
		line-height: 44px;
		text-align: ${(props) => (props.align ? props.align : 'left')};
		padding: ${(props) => props.p && props.p};
	}
`

export const H4 = styled.h4`
	font-size: 24px;
	line-height: 30px;
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	text-align: ${(props) => (props.ma ? props.ma : 'left')};
	padding: ${(props) => props.mp && props.mp};
	br {
		display: none;
	}
	@media screen and (min-width: 768px) {
		font-size: 28px;
		line-height: 36px;
		text-align: ${(props) => (props.align ? props.align : 'left')};
		padding: ${(props) => props.p && props.p};
		br {
			display: none;
		}
	}
	@media screen and (min-width: 1306px) {
		br {
			display: block;
		}
	}
`
export const H5 = styled.h5`
	font-size: 24px;
	line-height: 30px;
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	text-align: ${(props) => (props.ma ? props.ma : 'left')};
	padding: ${(props) => props.mp && props.mp};
`

export const P = styled.p`
	font-size: 1.2rem;
	line-height: 1.6rem;
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	text-align: ${(props) => (props.ma ? props.ma : 'left')};
	padding: ${(props) => props.mp && props.mp};
	& br {
		display: none;
	}
	@media screen and (min-width: 768px) {
		font-size: 1.4rem;
		line-height: 2rem;
		text-align: ${(props) => (props.align ? props.align : 'left')};
		padding: ${(props) => props.p && props.p};
		& br {
			display: block;
		}
	}
`

export const Small = styled.small`
	display: block;
	font-size: 14px;
	font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
	text-align: ${(props) => (props.ma ? props.ma : 'left')};
	padding: ${(props) => props.mp && props.mp};
	& br {
		display: none;
	}
	@media screen and (min-width: 768px) {
		text-align: ${(props) => (props.align ? props.align : 'left')};
		padding: ${(props) => props.p && props.p};
		& br {
			display: block;
		}
	}
`
