// api.js
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const resource = (rs) => {
    return Vue.http.post('http://localhost/miragemoveis/wp/api/pages/home/', {
       /*  headers: {
            Origin: 'http://localhost:8080/'
        }, */
        params: { name: 'home' }
    })
    .then(function(response) {
        // console.log(response);
        return response.data.data
    })
    .catch(function (response) { console.log(response) });
}

const postHome = () => resource('home')

export{postHome}