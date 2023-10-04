import { createWebHistory, createRouter } from "vue-router";

import HomeView from './components/HomeView.vue' ;
import LoginView from './components/LoginView.vue' ;
import HelloWorld from './components/HelloWorld.vue' ;
import ChildView from './components/ChildView.vue' ;
import PageNotFound from './components/PageNotFound.vue' ;

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
        path:'/helloworld/:name',
        component:HelloWorld
    },
    {
        name:'ChildView',
        path:'/child',
        component:ChildView
    },
    {
        name:'PageNotFound',
        path:'/:pathMatch(.*)*',
        component:PageNotFound
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;