import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/components/Home.vue";
import Chat from "@/components/Chat.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/chat', component: Chat, props: route => ({ query: route.query.demand }) },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;