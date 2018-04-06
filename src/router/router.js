// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '../components/Home.vue'
import About from '../components/About.vue'

Vue.use(Router)
Vue.use(Meta)

export function createRouter () {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				component: Home,
				meta: {
					title: 'Home Title - Vue SSR',
					metaTags: [
						{
							name: 'description',
							content: 'The home page of our example app.'
						},
						{
							property: 'og:description',
							content: 'The home page of our example app.'
						}
					]
				}
			},
			{ path: '/about', component: About }
		]
	})
}