<template>
  <div class="Filmovi">
    <h3>Raspored filmova</h3>
    <div class="card">
      <div class="card-header">
        Dodaj novi datum i film
      </div>
      <div class="card-body">
        <form v-if="logedIn">
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Film</label>
              <br>
              <select v-model="film" >
                <option ></option>
                <option v-for="film in filmovi" :key="film" >{{film.naziv}}</option>

              </select>
            </div>
            <div class="form-group col-md-3" >
              <label>Datum prikazivanja</label>
              <input class="form-control" type="date" v-model="datum_prikazivanja"  >
              
            </div>
            <div class="form-group col-md-3">
              <label>Vrijeme prikazivanja</label>
              <input class="form-control" type="time" format="HH:mm" v-model="vrijeme_prikazivanja"  >

            </div>
            <div class="form-group col-md-3">
              <label>Max ulaznica</label>
              <input
                v-model="max_ulaznica"
                type="number"
                min="10"
                max="100"
                step="1"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="10-100"
                required
              />
            </div>
          </div>
          
          
          
          <div class="ml-auto text-center">
            <button type="button" @click="dodajNoviRaspored"  class="btn btn-primary my-2">Dodaj</button>
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
                  Film
                </th>
                <th >
                  Datum prikazivanja
                </th>
                <th >
                  Vrijeme prikazivanja
                </th>
                <th >
                  Trenutno ulaznica
                </th>
                <th >
                  Max ulaznica
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="raspored in rasporedi" :key="raspored" style="color:blue;">
                 
                  <td>
                    {{raspored.naziv}}
                  </td>
                  <td>
                    {{raspored.datum_prikazivanja}}
                  </td>
                  <td>
                    {{raspored.vrijeme_prikazivanja}}
                  </td>
                  <td>
                    {{raspored.trenutno_ulaznica}}
                  </td>
                  <td>
                    {{raspored.max_ulaznica}}
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
  name:"test",

  data(){
    return{
      filmovi:[],
      film:"",
      datum_prikazivanja:"",
      vrijeme_prikazivanja:"",
      max_ulaznica:"",

      logedIn:false,

      rasporedi:[]
      
    }
  },
  
  methods:{
    

    checkIfLoggedIn(){
      
      if(login.emailRes && login.passwordRes && login.isAdmin){
        this.sviRasporedi()
        this.getMovies()
        this.logedIn=true
        console.log("Loged in")
      }else{
        this.logedIn=false
        console.log("Not loged in")
      }
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
    

    dodajNoviRaspored(){
      let alertMessage="Ne moze biti prazno:"
      var d = new Date();
      var dd = String(d.getDate()).padStart(2, '0');
      var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = d.getFullYear();

      var today = yyyy + "-"+ mm+ "-" + dd ;
      console.log(today)
      console.log(this.datum_prikazivanja)
      if(this.datum_prikazivanja==""){
        alertMessage+=" Datum,"
      }
      if(this.film ==""){
        alertMessage+=" Film,"
      }
      if(this.vrijeme_prikazivanja ==""){
        alertMessage+=" Vrijeme Prikazivanja,"
      }
      if(this.max_ulaznica ==""){
        alertMessage+=" maxUlaznica,"
      }
      if(alertMessage!="Ne moze biti prazno:"){
        alert("Sva polja moraju biti popunjena: "+alertMessage)
      
      }else if(this.max_ulaznica>90 || this.max_ulaznica<10){
        alert("Ne moze biti vise od 90 ili manje od 10 slobodnih sjedala")
      }else if(this.datum_prikazivanja<today){
        alert("Datum prikazivanja ne moze biti prije danas")
      }

      const axios = require("axios")
      
      axios.post("https://cinema-app2.herokuapp.com/NoviFilmRaspored", 
                {film:this.film,
                datum_prikazivanja:this.datum_prikazivanja,
                vrijeme_prikazivanja:this.vrijeme_prikazivanja,
                max_ulaznica:this.max_ulaznica})
      .then(response=>{
        this.sviRasporedi()
        alert(response.data)
      })
      .catch(error=>{
        console.log(error)
      })
    },

    sviRasporedi(){
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/SviRasporedi")
      .then(response=>{
        this.rasporedi = response.data
        console.log(this.rasporedi)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    
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
