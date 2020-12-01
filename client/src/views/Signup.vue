<template>
<form>
    
    <div class="field ">
    <label for="FirstName" class="label">First Name</label>
    <div key="FirstName" class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="First Name" v-model="firstName" >
        <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
        </span>
    </div>
    
    </div>
    <div class="field">
    <label for="LastName" class="label">Last Name</label>
    <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Last Name" v-model="lastName" >
        <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
        </span>
    </div>
    </div>
    <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
        </span>
    </div>
    </div>
    <div class="field">
        <label class="label">Password</label>
        <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
        </span>
        </p>
    </div>
    <div class="field">
        <label class="label">Confirm Password</label>
        <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="confirmPassword">
        <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
        </span>
        </p>
    </div>


    <div class="field">
    <div class="control">
        <label class="checkbox">
        <input type="checkbox">
        I agree to the <a href="#">terms and conditions</a>
        </label>
    </div>
    </div>

    <div class="field">
        <p class="control">
        <button class="button is-success" @click.prevent="signup">
            Signup
        </button>
        </p>
    </div>
</form>
  
</template>

<script>
import { signup } from "@/models/signup";

export default {
    data: ()=>({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    }),
    methods:{
        signup(){
            signup(this.firstName,this.lastName,this.email,this.password)
        }
    }

}
</script>

<style>

</style>