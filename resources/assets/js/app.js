// we will import vue.
import Vue from 'vue';
// will import vue router.
import Router from 'vue-router';
// will import vuex.
import Vuex from 'vuex';
// will import axios.
import axios from 'axios';

// will inject vuex store
import store from './store';
// will required default Home.vue and About.vue component.
import Home from './components/Home.vue';
import About from './components/About.vue';

// Now vue will use vue router.
Vue.use(Router);
// vue will use vuex store.
Vue.use(Vuex);
// we don't use vue-router. but with this code, 
// we can use this.$http.get() inside components.
Vue.prototype.$http = axios;

// this is routes. For now, there's only one Home route.
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
]

// this is creating new router.
const router = new Router({
    // typical SPA application will include # in url. eg. example.com/#/about, will remove that # with history mode.
    mode: 'history', 
    routes // short for routes: routes
});

// we will start our application with router and vuex store.
const app = new Vue({
    el: '#app',
    router,
    store
});