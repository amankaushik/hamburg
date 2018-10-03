import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Search from './hamburg/Search.vue';


Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: h => h(Search),
}).$mount('#search');
