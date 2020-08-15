import { createGlobalStyle } from 'styled-components'
import bg from '../images/bg.svg'
export const GlobalStyles = createGlobalStyle`
*{
 margin:0;
 padding:0;
 box-sizing: border-box;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	width: 100vw;
	height: 100vh;
	background: url(${bg});
 background-repeat: no-repeat;
 background-size: contain;
	overflow-x: hidden;
	padding: 0;
 margin: 0;
 font-size: 16px;
 color: ${(props) => (props.theme.isDark ? '#fff' : '#111')};
 background-color: ${(props) => (props.theme.isDark ? '#000' : '#fff')};
 transition: background-color .7s ease;
 @media screen and (min-width: 768px) {
 background-size: cover;
 }
}
/*Framer menu*/
.mb-background-sidemenu {
 width: 100%;
	position: fixed;
	right: 0;
 left:0;
	bottom: 0;
 background-color: ${(props) => (props.theme.isDark ? '#232221' : '#e6e6e6')};
 z-index: 20;
 margin: auto;
 border-radius: 24px 24px 0 0;
 padding: 24px 16px;
}
.mb-menu-toggle {
	outline: none;
	border: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	cursor: pointer;
	position: fixed;
	bottom: 16px;
	right: 20px;
	width: 58px;
	height: 58px;
	border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 background: #1EC2FF;
 z-index: 20;
}
.mb-sidebar-ul {
 width: 100%;
 border-radius: 16px;
 background-color: ${(props) => (props.theme.isDark ? '#333231' : '#fff')};
 margin-top: 16px;
 li.mb-sidebar-li:last-child{
   border: none;
  } 
}
.mb-sidebar-li {
	list-style: none;
 padding: 16px 24px;
	display: flex;
	align-items: center;
	cursor: pointer;
 border-bottom: ${(props) =>
		props.theme.isDark ? '1px solid #23222144' : '1px solid #e6e6e6'};
 
}
.backdrop{
 position: fixed;
 top: 0;
 left:0;
 bottom:0;
 width: 100vw;
 height: 100vh;
 background: rgba(0,0,0,.4);
 z-index: 10;
}
/*Hero*/
.hero{
 height: calc(100vh - 66px);
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
}
.center-text-hero{
 display: flex;
 align-items: center;
}
.btn-download{
 background: #09f;
 border-radius: .8rem;
 color: #fff;
 display: block;
 font-size: 1.2rem;
 font-weight: 500;
 padding: 12px 0;
 width: 100%;
 text-align: center;
 @media screen and (min-width:768px) {
  margin:0;
  width: 224px;
  padding: 14px 0;
 }
}
.banner-img{
 width: 302px;
 display: block;
 margin: auto;
 @media screen and (min-width: 768px) {
  width: 96%;
 }
}
.banner-404{
 width: 268px;
 display: block;
 margin: auto;
 @media screen and (min-width: 768px) {
  width: 88%;
 }
}
/*Helpers menu and text*/
.height-90vh-100vh{
 height: 90vh;
 @media screen and (min-width: 575px) {
  height: 100vh;
 }
}
.mb-title-menu{
 background-color: ${(props) => (props.theme.isDark ? '#333231' : '#fff')};
 border-radius: 16px;
}
a, .paragraph{
 text-decoration: none;
 color: ${(props) => (props.theme.isDark ? 'rgb(204,204,204)' : '#333')};
}
.paragraph-serif{
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, serif;
}
.normal-color{
 color: ${(props) => (props.theme.isDark ? '#fff' : '#111')};
}
/*List buttons menu mobile*/
.list-buttons{
 display: flex;
 justify-content: flex-end;
 list-style: none;
 padding: 16px;
 li{
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.theme.isDark ? '#333231' : '#fff')};
 }
 li .round-button{
  outline: none;
  border: none;
  cursor: pointer;
	width: 100%;
	height: 100%;
	background-color: transparent;
	outline: none;
 }
}
/* About */
.profile-img{
 width: 180px;
 height: 180px;
 border-radius: 50%;
 margin: auto;
}
/* Projects */
.project-background{
 width: 100%;
 height: 378px;
 border-radius: 24px;
 padding: 24px;
 ::before{
  border-radius: 24px;
 }
 ::after{
  border-radius: 24px;
 }
}
.project-title{
 color: #fff;
}
/* Skills */
.row-skills{
 list-style: none;
 display: flex;
 flex-direction: column;
 li{
  padding: 12px  0;
   display: flex;
   align-items:center;
   @media screen and (min-width:768px) {
    padding: 16px; 
   }
  div{
   margin-right: 8px;
   width: 16px;
   height: 16px;
   border-radius:50%;
   @media screen and (min-width: 768px) {
    margin-right: 16px;
    width: 40px;
   height: 40px;
   }
  }
 }
}
`
