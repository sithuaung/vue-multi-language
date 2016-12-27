import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';          
import VueI18n from 'vue-i18n';

// will inject vuex store
import store from './store';

// will required default Home.vue and About.vue component.
import Home from './components/Home.vue';
import About from './components/About.vue';

Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueI18n);

Vue.config.debug = true;
Vue.config.lang = 'en';
Vue.config.fallbackLang = 'en'

// ready translated locales like ui locales.
import uiLocale from './lang/ui';
var locales = uiLocale;

// set locales
Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
});

/**
 * Multi language need to cange in real time.
 */
Vue.prototype.$locale = {
    change(lang) {
        Vue.config.lang = lang
    },
    current() {
        return Vue.config.lang
    }
}

// we can use this.$http.get() inside components.
Vue.prototype.$http = axios;

// this is routes. For now, there's only one Home route.
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About }
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