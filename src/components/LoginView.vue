<template>
    <div class="container d-flex flex-column">
        <div class="emailType my-2">
            <input type="email" placeholder="Write your email" v-model="email"/>
        </div>
        <div class="passwordType my-1">
        <input type="password" placeholder="Write your password" v-model="password"/>
        </div>
        <div class="my-1 justify-content-center">
            <button class="btn btn-primary" v-on:click="getData()">Submit</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LoginView',
        data(){
            return{
                email:"",
                password:""
            }
        },
        methods:{
            getData(){
                console.log(this.email,this.password)
            }
        }
    }
</script>

<style>
    input{
        border-radius: 4px;
        padding: 2px;
    }
</style>