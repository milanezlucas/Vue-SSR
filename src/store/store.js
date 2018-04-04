// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export function createStore() {
    return new Vuex.Store({
        state: {
            title: ''
        },
        actions: {
            fetchTitle({ commit }) {
               return Vue.http.post('http://localhost/miragemoveis/wp/api/pages/home/', {
                    params: { name: 'home' }
                })
                .then(function(response) {
                    return commit('changeTitle', response.data.data.metaTitle)
                })
                .catch(function (response) { console.log(response) })
            }
        },
        mutations: {
            changeTitle(state, value) {
                state.title = value;
                // Vue.set(state.title, value)
            },
        }
    })
}