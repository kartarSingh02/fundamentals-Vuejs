<template>
  <div class="hello container">
    <h1>This is {{ profile }}'s Counter</h1>
    <h1>{{ msg }}</h1>
    <!-- <P>{{ email}}</P>
    <P>{{ email = "abcd@gmail.com"}}</P>
    <h1>{{ add(2,4) }}</h1>
    <h1>{{ getSum(5,4) }}</h1>
    <h1>{{ name }}</h1> -->
    <h1>{{ count }}</h1>
    <button class="btn btn-primary" v-on:click="count = count + 1">+</button>
    <button class="btn btn-primary mx-2" v-on:click="count = count - 1">-</button>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "HelloWorld",

  mounted() {
    const route = useRoute();
    console.warn("route", route.params.name);
    this.profile = route.params.name;
  },

  props: {
    msg: String,
  },
  // data(){
  //   return {
  //     email:"email@gmail.com",
  //     add:function(a,b){
  //       return a+b;
  //     },
  //     name:"kartar"
  //   }
  // },
  // methods:{
  //     getData(){
  //       return this.name
  //     },
  //     getSum(a,b){
  //       return this.add(a,b)
  //     }
  // }
  // WATCHERS CONCEPT
  data() {
    return {
      count: 0,
      profile: "",
    };
  },
  // in watch we have to write the same name as data property to make it work, this observe and react to changes in a specific data property or computed property
  watch: {
    count(val, prev) {
      if (val > 5 && val > prev) {
        alert("Value Greater then 5");
      }
    },
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
