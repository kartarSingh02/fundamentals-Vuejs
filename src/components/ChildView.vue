<template>
  <div class="container">
    <h1 :class="{ yellow: colorfull }">papa hun papa naam toh suna hoga {{ name }}</h1>
    <!-- <button class="btn btn-primary" v-on:click="getdata()">click to check your name as alert</button> -->
    <!-- html binding we dont need to use {{ }} directlty -->
    <div v-html="tag1"></div>
    <button class="btn btn-primary" v-on:click="colorfull = !colorfull">
      Change Style
    </button>
    <button class="btn btn-success" v-on:click="getUser(userName)">Send User Name</button>

    <input class="my-2 mx-3" type="text" ref="inputfield" />
    <button v-on:click="changeinputstyles()">click kr be</button>
  </div>
</template>

<script>
export default {
  name: "ChildView",
  props: {
    name: String,
    getdata: Function,
    getUser: Function,
    // html binding
  },
  data() {
    return {
      tag1: "<h1>Kartar Singh</h1>",
      colorfull: true,
      userName: "hahaiiii",
    };
  },
  methods: {
    changeinputstyles() {
      this.$refs.inputfield.focus();
      let value = this.$refs.inputfield.value;
      console.log(value);
    },
  },
};
</script>

<style>
.yellow {
  background-color: yellow;
  width: fit-content;
  padding: 5px;
}
</style>
