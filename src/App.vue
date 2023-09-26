<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <HomeView homeMsg="This is Home Component" />
  <LoginView/>
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
  }
}
</script>

<style>
</style>
