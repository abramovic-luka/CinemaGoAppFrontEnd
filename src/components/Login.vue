<template>
  <div class="container" id="login">
    <br />
    <br />
    <h2>Login</h2>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              v-model="password"
            />
          </div>
          <button type="button" @click="checkLogin" class="btn btn-primary">Login</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import {login} from "@/login"

export default {
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    checkLogin(){
      const axios = require("axios")
      console.log(login)
        let email =this.email
        let password= this.password
        axios.post("https://cinema-app2.herokuapp.com/db/login",{email,password})
        .then(response=>{
          
          console.log(login)
          console.log(response)
          login.emailRes = response.data.emailRes
          if(response.data.isAdmin ==null){
            login.isAdmin=false
          }else{
            login.isAdmin = response.data.isAdmin
          }
          login.passwordRes = response.data.passwordRes
          console.log(login)
        })
        .catch(error=>{
          console.log(error)
        })
    }
  }
}
</script>

<style scoped></style>
