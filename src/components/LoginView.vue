<template>
    <div class="container d-flex flex-column" >
    <div v-if="toggle">
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
        <button class="btn btn-success col-md-1 my-1" v-on:click="toggle=!toggle">Toggle</button>
    </div>
</template>

<script>
    export default {
        name:'LoginView',
        data(){
            return{
                email:"",
                password:"",
                toggle:false
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