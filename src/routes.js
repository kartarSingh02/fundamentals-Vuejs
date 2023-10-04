import { createWebHistory, createRouter } from "vue-router";

import HomeView from './components/HomeView.vue' ;
import LoginView from './components/LoginView.vue' ;
import HelloWorld from './components/HelloWorld.vue' ;
import ChildView from './components/ChildView.vue' ;

const routes=[
    {
        name:'HomeView',
        path:'/',
        component:HomeView
    },
    {
        name:'LoginView',
        path:'/login',
        component:LoginView
    },
    {
        name:'HelloWorld',
        path:'/helloworld',
        component:HelloWorld
    },
    {
        name:'ChildView',
        path:'/child',
        component:ChildView
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;