<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <!-- <P>{{ email}}</P>
    <P>{{ email = "abcd@gmail.com"}}</P>
    <h1>{{ add(2,4) }}</h1>
    <h1>{{ getSum(5,4) }}</h1>
    <h1>{{ name }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
}
</script>

