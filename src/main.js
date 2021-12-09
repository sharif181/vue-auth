import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// service
import ApiService from "./services/api.services";

window.ApiService = ApiService
ApiService.init();

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
