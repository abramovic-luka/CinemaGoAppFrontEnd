<template>
  <div class="Filmovi">
    <h3>Korisnici</h3>
    

    <div class="card mt-5">
      <div class="card-header">
        Popis korisnika
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>
                  Ime
                </th>

                <th>
                  Email
                </th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.name" style="color:blue;">
                <td>
                  {{user.ime}}
                </td>
                <td>
                  {{user.email}}
                </td>
                
                  <td>
                    <a href="#" class="icon">
                      <i class="fa fa-trash"></i>
                    </a>
                    <a href="#" class="icon">
                      <i class="fa fa-pencil"></i>
                    </a>
                  </td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  
  data(){
    return{
      users:[]
    }
  },
  methods:{
    dobiSveUsers(){
      //let filmovi =[]
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/Users")
      .then(response=>{
        console.log("Probava dohvatiti usere")
        console.log(response.data)
        this.users=response.data
        console.log(this.users)
      })
      .catch(error=>{
          console.log(error)
        })
      
    }, 
  },

  mounted(){
    this.$nextTick(this.dobiSveUsers())
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.icon {
  margin-right: 10px;
}
.icon i {
  cursor: pointer;
}
.card-header {
  color: black;
}
label {
  color: black;
}
</style>
