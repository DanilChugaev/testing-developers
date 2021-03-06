import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vuetify';
import './registerServiceWorker';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
// import '@mdi/font/css/materialdesignicons.css';
// import 'vue-material-design-icons/styles.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
