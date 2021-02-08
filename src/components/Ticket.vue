<template>
  <div class="Filmovi">
    <h3>Raspored filmova</h3>
    <div class="card">
      <div class="card-header">
        Dodaj novi datum i film
      </div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Naziv</label>
              <input
                v-model="noviFilm.Naziv"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Strani naziv</label>
              <input
                v-model="noviFilm.Strani_Naziv"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Redatelj</label>
              <input
                v-model="noviFilm.Redatelji"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Glumci</label>
              <input
                v-model="noviFilm.Glumci"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
          </div>
          
          
          
          <div class="ml-auto text-right">
            <button type="button" @click="unesiFilm" class="btn btn-primary my-2">Dodaj</button>
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">
        Popis filmova
      </div>
      <div class="card-body">
        <div class="table-responsive-lg">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  Naziv
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="film in trenutniFilmovi" :key="film.name" style="color:blue;">
                 
                  <td>
                    {{film.naziv}}
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
import {login} from "@/login"

export default {
  
  data(){
    return{
      film:[],
      datum_prikazivanja:"",
      vrijeme_prikazivanja:"",
      max_ulaznica:""
    }
  },
  methods:{
    

    checkIfLoggedIn(){
      if(login.emailRes && login.passwordRes && login.isAdmin){
        this.dobiSveFilmove()
        this.getMovies()
        this.getDrzave()
        this.getGodine()
        this.getAudio()
        console.log("Loged in")
      }else{
        
        console.log("Not loged in")
      }
    },

    getMovies(){
      const axios = require("axios")
      axios.get("http://localhost:3000/FilmoviNaziv")
      .then(response=>{
        console.log(response.data)
        this.pretraga.filmovi=response.data
        
        console.log(this.pretraga.filmovi)
      })
      .catch(error=>{
          console.log(error)
        })
    },
    
    
    queryAgain(){
      console.log("Query again")
      const axios = require("axios")
      
      axios.post("http://localhost:3000/FiltriraniFIlmovi", this.pretraga)
      .then(response=>{
        console.log(response.data)
        
        
        this.trenutniFilmovi = response.data
      })
      .catch(error=>{
          console.log(error)
        })
    },
    
  },
  
  mounted(){
    this.$nextTick(this.checkIfLoggedIn())
    
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
