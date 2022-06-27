// // 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')
import './banner.js'
import './tabs.js'

import $ from 'jquery'
$('#swiper').css('background', 'pink')

// import './styles/index.css';
import './styles/index.less';

import imgUrl from './assets/1.gif';
const img = document.createElement('img');
img.src = imgUrl
document.body.appendChild(img)



import imgUrl1 from './assets/logo_small.png';
const img1 = document.createElement('img');
img1.src = imgUrl1
document.body.appendChild(img1)

import './assets/fonts/iconfont.css'