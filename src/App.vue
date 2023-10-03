<template>
<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <HomeView homeMsg="This is Home Component" /> -->
  <!-- <LoginView/> -->

  <button @click="tab='LoginView'">LoginView</button>
  <button @click="tab='HelloWorld'">HelloWorld</button>
  <button @click="tab='HomeView'">HomeView</button>

  <component :is="tab"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeView from './components/HomeView.vue'
import LoginView from './components/LoginView.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomeView,
    LoginView,
  },
  data(){
    return{
      tab:"LoginView"
    }
  }
}
</script>

<style>
</style>
