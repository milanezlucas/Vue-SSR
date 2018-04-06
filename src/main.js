import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/router.js'
import VueResource from 'vue-resource'
import {createStore} from './store/store.js'
import { sync } from 'vuex-router-sync'

Vue.use(VueResource)

export function createApp() {
    const router    = createRouter()
    const store     = createStore()

    sync(store, router)
    
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    return { app, router, store }
}