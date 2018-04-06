// api.js
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const resource = (rs) => {
    return Vue.http.post('http://localhost/miragemoveis/wp/api/pages/home/', {
        params: { name: 'home' }
    })
}

const postHome = () => resource('home')

export{postHome}