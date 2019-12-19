import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive'
import ScrollAnimation from './directives/scrollanimation'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueScrollactive)
Vue.directive('scrollanimation', ScrollAnimation);


new Vue({
    el: '#app',
    render: h => h(App)
})