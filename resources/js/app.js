/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue';

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes} from './routes';
import Vue from 'vue';
import LaravelPermissionToVueJS from 'laravel-permission-to-vuejs'

Vue.use(VueRouter, VueAxios, axios, LaravelPermissionToVueJS);

const router = new VueRouter({
    mode:'history',
    routes: routes
});

Vue.prototype.can = function(value){
    return window.Laravel.jsPermissions.permissions.includes(value);
}
Vue.prototype.is = function(value){
    return window.Laravel.jsPermissions.roles.includes(value);
}

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

