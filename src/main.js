import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'




const routes = [        //Creating router 
    {
    path: '/',
    components: App
},

];

const router = createRouter({
    "history": createWebHashHistory,
    routes
});

const app = createApp(App);     //Use the router from App.vue
app.use(router);
app.mount("#app");

createApp(App).mount('#app')
