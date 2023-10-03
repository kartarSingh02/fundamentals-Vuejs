<template>
  <div class="container h-100 d-flex justify-content-center">
    <div class="my-auto">
      <div class="emailType my-2">
        <label>Email</label>
        <input type="email" placeholder="Write your email" v-model="email" />
      </div>
      <div class="passwordType my-1">
        <label>Password</label>
        <input
          type="password"
          placeholder="Write your password"
          v-model="password"
        />
      </div>
      <div class="my-1 justify-content-center">
        <button class="btn btn-primary" v-on:click="getData()">Submit</button>
      </div>
    </div>
    <!-- <button class="btn btn-success col-md-1 my-1" v-on:click="toggle=!toggle">Toggle</button> -->
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      // toggle:true
    };
  },
  methods: {
    getData() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
input {
  border-radius: 4px;
  padding: 2px;
}
.outerdiv {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>



