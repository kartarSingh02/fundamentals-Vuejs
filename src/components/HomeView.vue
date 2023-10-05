<template>
  <div class="container">
    <!-- <h1>Home Component</h1>
    <p>{{homeMsg}}</p>
    <button v-on:click="counter()">Counter</button> 
    <h3>{{ count }}</h3>
    <ChildView name="kartar Singh" :getdata='getdata'/> -->
    <!-- <router-link to="/child">Child</router-link> -->
    <!-- <ChildView :getUser="getUserName" /> -->
    <!-- <h1>{{ userName }}</h1> -->
    <!-- we use two way binding to reduce time and code complexity using v-model -->
    <!-- <input id="inputVar" type="text" v-model="name" />
    <h3>{{ name }}</h3> -->

    <ul class="item" v-for="item in list" :key="item.id">
      <li>{{ item.id }}</li>
      <li>{{ item.email }}</li>
      <li>{{ item.first_name }}</li>
      <li><img :src="item.avatar" /></li>
    </ul>
  </div>
</template>

<script>
// import ChildView from "./ChildView.vue";
import axios from "axios";
export default {
  name: "HomeView",
  props: {
    homeMsg: String,
  },
  data() {
    return {
      count: 0,
      name: "kartareeyaaa",
      userName: "",
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn("data is ", result.data.data);
    this.list = result.data.data;
  },
  methods: {
    counter() {
      this.count = this.count + 1;
    },
    // getdata(name){
    //     alert(name);
    // },
    getUserName(name) {
      this.userName = name;
    },
  },
  //   components: {
  //     ChildView,
  //   },
};
</script>

<style scoped>
h1 {
  color: blue;
}
button {
  background-color: red;
  color: white;
  padding: 6px;
  border-radius: 4px;
  box-shadow: none;
}

#inputVar {
  padding: 10px;
  border-radius: 4px;
}

.item {
  display: flex;
}
.item li {
  display: inline-block;
  border: 1px solid;
  width: 180px;
  padding: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
