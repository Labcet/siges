/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

//import App from './components/App.vue';
//import App from './components/coordinador/Muestra.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import { routes} from './routes';
import Vue from 'vue';

Vue.use(VueRouter, VueAxios, axios);

const router = new VueRouter({
    mode:'history',
    routes: routes
})

//window.Vue = require('vue').default;
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('coordinador-component', require('./components/coordinador/Muestra.vue').default);

const app = new Vue({
    el: '#app',
    router:router,
    //render: h => h(App)
});

