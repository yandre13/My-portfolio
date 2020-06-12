import styled, { css } from 'styled-components'

const styles = css`
	margin: 0 auto;
	max-width: 1280px;
	width: 90%;
	@media only screen and (min-width: 600px) {
		& {
			width: 85%;
		}
	}
	@media only screen and (min-width: 1024px) {
		& {
			width: 75%;
		}
	}
`

export const Container = styled.div`
	${styles}
`

export const MainContainer = styled.main`
	${styles}
`

export const SubContainer = styled.section`
	width: 100%;
	margin: 0 auto;
	@media only screen and (min-width: 1024px) {
		& {
			width: 90%;
		}
	}
`

export const Separator = styled.div`
	width: 100%;
	height: 1px;
	background: #1ec2ff;
	margin-bottom: ${(props) => props.mmb && `${props.mmb}px`};
	margin-top: ${(props) => props.mmt && `${props.mmt}px`};

	@media screen and (min-width: 768px) {
		margin-bottom: ${(props) => props.mb && `${props.mb}px`};
		margin-top: ${(props) => props.mt && `${props.mt}px`};
	}
`

export const ContainerFooter = styled.footer`
	${styles}
`
