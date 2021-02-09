<template>
<div>
    <h3>Rezervacije</h3>
    
    <div class="card" v-if="l && e && a">
      <div class="card-header">
        Pretrazi rezervacije
      </div>
      <div class="card-body">
        <form>
          
          <div class="form-row justify-content-center">
            <div class="form-group col-md-3">
              <label>Naziv filma  </label>
              <select v-model="id_film"  @change="queryAgain">
                <option ></option>
                <option v-for="film in filmovi" :key="film" >{{film.naziv}}</option>

              </select>
            </div>
            <div class="form-group col-md-3" id="WTF">
              <label>Datum gledanja  </label>


              <select v-model="odabrani_datum"  @change="queryAgain">
                <option ></option>
                <option v-for="datum in datumi" :key="datum" >{{datum.datum_prikazivanja}}</option>

              </select>
              
            </div>
            <div class="form-group col-md-3">
              <label>Vrijeme prikazivanja  </label>
              <select v-model="odabrano_vrijeme"  @change="queryAgain">
                <option ></option>
                <option v-for="time in vrijeme" :key="time" >{{time.vrijeme_prikazivanja}}</option>

              </select>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">
        Popis rezervacija
      </div>
      <div class="card-body">
        <div class="table-responsive-lg">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  Ime
                </th>
                <th>
                  Prezime
                </th>
                <th>
                  Naziv
                </th>
                <th>
                  Datum prikazivanja
                </th>
                <th>
                  Vrijeme prikazivanja
                </th>
                <th>
                  Red
                </th>
                <th>
                  Sjedalo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rezervacija in rezervacije" :key="rezervacija.name" style="color:blue;">
                  <td>
                    {{rezervacija.ime}}
                  </td>
                  <td>
                    {{rezervacija.prezime}}
                  </td>
                  <td>
                    {{rezervacija.naziv}}
                  </td>
                  <td>
                    {{rezervacija.datum_prikazivanja}}
                  </td>
                  <td>
                    {{rezervacija.vrijeme_prikazivanja}}
                  </td>
                  <td>
                    {{rezervacija.red}}
                  </td>
                  <td>
                    {{rezervacija.sjedalo}}
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
  name:"WTF",
  data(){
    return{
      rezervacije:[],
      datumi:[],
      odabrani_datum:"",

      odabrano_vrijeme:"",
      vrijeme:[],

      id_film:"",
      filmovi:[],

      l:false,
      e:false,
      a:false
    }
  },
  methods:{
    dobiSveRezervacije(){
      //let filmovi =[]
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/Rezervacije/Admin")
      .then(response=>{
        console.log(response.data)
        this.rezervacije=response.data
        console.log(this.rezervacije)
      })
      .catch(error=>{
          console.log(error)
        })
      
    },
    queryAgain(){
      console.log("Query again")
      const axios = require("axios")
      
      axios.post("https://cinema-app2.herokuapp.com/FiltriraneRezervacije", {odabrani_datum:this.odabrani_datum,odabrano_vrijeme:this.odabrano_vrijeme, id_film:this.id_film})
      .then(response=>{
        console.log(response.data)
        
        
        this.rezervacije= response.data
      })
      .catch(error=>{
          console.log(error)
        })
    },
    getDates(){
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/Dates")
      .then(response=>{
        console.log(response.data)
        this.datumi=response.data
        
        console.log(this.datumi)
      })
      .catch(error=>{
          console.log(error)
        })
    },
    getTimes(){
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/VrijemeGledanja")
      .then(response=>{
        console.log(response.data)
        this.vrijeme=response.data
        
        console.log(this.vrijeme)
      })
      .catch(error=>{
          console.log(error)
        })
    },
    getMovies(){
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/FilmoviNaziv")
      .then(response=>{
        console.log(response.data)
        this.filmovi=response.data
        
        console.log(this.filmovi)
      })
      .catch(error=>{
          console.log(error)
        })
    },

    checkIfLoggedIn(){
      if(login.emailRes && login.passwordRes && login.isAdmin){
        this.l=login.passwordRes
        this.a=login.passwordRes
        this.e=login.passwordRes
        console.log("Logged in")
        console.log(this.logg)
        this.dobiSveRezervacije()
        this.getDates()
        this.getTimes()
        this.getMovies()
      }else{
        this.l=login.passwordRes
        this.a=login.passwordRes
        this.e=login.passwordRes
        console.log(this.logg)
        console.log("Not logged in")
      }
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
