// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import {postHome} from '../api/api.js'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        state: {
            title: ''
        },
        actions: {
            fetchTitle({ commit }) {
                return postHome()
                    .then(function (response) {
                        return commit('changeTitle', response.data.data.metaTitle)
                    })
                    .catch(function (response) { console.log(response) })
            }
        },
        mutations: {
            changeTitle(state, value) {
                state.title = value;
            },
        }
    })
}