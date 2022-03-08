/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
//import vue from 'vue';

window.Vue = require('vue');

import App from './components/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

import VueRouter from 'vue-router';
import { routes} from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
const router = new VueRouter({
    mode:'history',
    routes: routes

})

//window.Vue = require('vue').default;
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

//Vue.component('oficina-component', require('./components/OficinaComponent.vue'));

const login = new Vue({
     el: '#login',
     router:router,
    render: h=> h(Login)
})

const app = new Vue({
    el: '#app',
   router:router,
 render: h => h(App)
});

