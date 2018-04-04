import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/router.js'
import VueResource from 'vue-resource'
import {createStore} from './store/store.js'
import { sync } from 'vuex-router-sync'

Vue.use(VueResource)

// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
    // create router instance
    const router    = createRouter()
    const store     = createStore()

    sync(store, router)

    const app = new Vue({
        router,
        store,
        // the root instance simply renders the App component.
        render: h => h(App)
    });

    return { app, router, store }
}