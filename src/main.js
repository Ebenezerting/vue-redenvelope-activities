import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false;
//token
import token from './utils/cache.js'
Vue.prototype.$token = token
    //封装
import http from './utils/fetch.js'
Vue.use(http)
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');