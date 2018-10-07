<template>
    <div class="main">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../node_modules/swiper/dist/css/swiper.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body,html {
	line-height: 1;
	height: 100%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
a,a:hover,a:focus,a:link,a:visited,a:active{
    text-decoration: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.clearfix:after{
    content:"";
    height:0;
	line-height:0;
	display:block;
	visibility:hidden;
	clear:both;
}
.clearfix{
    zoom:1;
}
.main{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: url(./assets/bg.png) center center;
    background-size: cover;
    text-align: center;
    width: 100%;
    overflow-y: auto;
}
</style>
