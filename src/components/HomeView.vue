<template>
<div class="container">
    <h1>Home Component</h1>
    <p>{{homeMsg}}</p>
    <button v-on:click="counter()">Counter</button> 
    <h3>{{ count }}</h3>

    <!-- we use two way binding to reduce time and code complexity using v-model -->
    <input id="inputVar" type="text" v-model="name" />
    <h3>{{ name }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'HomeView',
        props:{
            homeMsg:String
        },
        data(){
            return {
                count:0,
                name:""
            }
        },
        methods:{
            counter(){
                this.count=this.count+1
            }
        }
    }
</script>

<style scoped>
h1{
    color: blue;
}
button{
    background-color: red;
    color:white;
    padding: 6px;
    border-radius: 4px;
    box-shadow: none;
}

#inputVar{
    padding: 10px;
    border-radius: 4px;
}

</style>