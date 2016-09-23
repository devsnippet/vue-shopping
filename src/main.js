import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/font/iconfont.css'
import $ from './assets/js/jquery-1.9.1.min';

Vue.use(MintUI);

//注册插件
Vue.use(VueResource);

Vue.use(VueRouter);

Vue.http.options.emulateJSON = true;

var router = new VueRouter(
	{
	    hashbang: true,
		history: false,
		saveScrollPosition: false,
		transitionOnLoad: true,
		linkActiveClass: 'active'
	}
);


import views from './router'
// 路由map
router.map(views)
router.start(App, '#app')

