import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

const vue = createApp(App);
vue.use(store);
vue.mount('#app');
