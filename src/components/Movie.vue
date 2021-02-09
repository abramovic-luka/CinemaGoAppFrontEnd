<template>
  <div class="Filmovi">
    <h3>Filmovi</h3>
    <div class="card">
      <div class="card-header">
        Dodaj novi film
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
                placeholder="Pod vodom"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Strani naziv</label>
              <input
                v-model="noviFilm.Strani_Naziv"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Underwater"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Redatelj</label>
              <input
                v-model="noviFilm.Redatelji"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="\_(*.*)_/"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Glumci</label>
              <input
                v-model="noviFilm.Glumci"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Bruce lee , ...."
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Drzava</label>
              <input
                v-model="noviFilm.Drzava"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Murica"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Audio</label>
              <input
                v-model="noviFilm.Audio"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Engleski"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Titlovi</label>
              <input
                v-model="noviFilm.Titlovi"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Njemacki"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Trajanje</label>
              <input
                v-model="noviFilm.Trajanje"
                type="number"
                min="0"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="120 min"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-grou col-md-3">
              <label>Opis</label>
              <input
                v-model="noviFilm.Opis"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Kratki opis"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Zanr</label>
              <input
                v-model="noviFilm.Zanr"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Komedija"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Ocjena</label>
              <input
                v-model="noviFilm.Ocjena"
                type="number"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                min="0"
                max="10"
                step=".1"
                placeholder="0-10,  5.5"
                required
              />
            </div>
              <div class="form-group col-md-3">
              <label>Godina</label>
              <input
                v-model="noviFilm.Godina_proizvodnje"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="2000"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3"></div>
            <div class="form-group col-md-3">
              <label>Slika</label>
              <input
                v-model="noviFilm.Slika"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Link"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Pozadina</label>
              <input
                v-model="noviFilm.Pozadina"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Link"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Trailer</label>
              <input
                v-model="noviFilm.Trailer"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                placeholder="Link"
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
        <form>
          
          <div class="form-row justify-content-center">
            <div class="form-group col-md-3">
              <label>Naziv filma  </label>
              <select v-model="pretraga.naziv"  @change="queryAgain">
                <option ></option>
                <option v-for="film in pretraga.filmovi" :key="film" >{{film.naziv}}</option>

              </select>
            </div>
            <div class="form-group col-md-3">
              <label>Drzava  </label>


              <select v-model="pretraga.drzava"  @change="queryAgain">
                <option ></option>
                <option v-for="drzava in pretraga.drzave" :key="drzava" >{{drzava.drzava}}</option>

              </select>
              
            </div>
            <div class="form-group col-md-3">
              <label>Godina  </label>
              <select v-model="pretraga.godina_proizvodnje"  @change="queryAgain">
                <option ></option>
                <option v-for="godina in pretraga.godine" :key="godina" >{{godina.godina_proizvodnje}}</option>

              </select>
            </div>
            <div class="form-group col-md-3">
              <label>Audio  </label>
              <select v-model="pretraga.audio"  @change="queryAgain">
                <option ></option>
                <option v-for="audio in pretraga.audioo" :key="audio" >{{audio.audio}}</option>

              </select>
            </div>
          </div>
        </form>
      </div>
      <div class="card-body">
        <div class="table-responsive-lg">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  Naziv
                </th>
                <th>
                  Strani Naziv
                </th>
                <th>
                  Drzava
                </th>
                <th>
                  Audio
                </th>
                <th>
                  Titlovi
                </th>
                <th>
                  Trajanje
                </th>
                
                <th>
                  Zanr
                </th>
                <th>
                  Ocjena
                </th>
                <th>
                  Godina
                </th>
                <th>
                  CRUD  
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="film in trenutniFilmovi" :key="film.name" style="color:blue;">
                 
                  <td>
                    {{film.naziv}}
                  </td>
                  <td>
                    {{film.strani_naziv}}
                  </td>
                  
                  <td>
                    {{film.drzava}}
                  </td>
                  <td>
                    {{film.audio}}
                  </td>
                  <td>
                    {{film.titlovi}}
                  </td>
                  <td>
                    {{film.trajanje}}
                  </td>
                  
                  <td>
                    {{film.zanr}}
                  </td>
                  <td>
                    {{film.ocjena}}
                  </td>
                  <td>
                    {{film.godina_proizvodnje}}
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
      noviFilm:{
        Naziv:"",
        Strani_Naziv:"",
        Redatelji:"",
        Glumci:"",
        Drzava:"",
        Audio:"",
        Titlovi:"",
        Trajanje:"",
        Opis:"",
        Slika:"",
        Pozadina:"",
        Zanr:"",
        Ocjena:"",
        Trailer:"",
        Godina_proizvodnje:""
      },
      trenutniFilmovi:[],

      pretraga:{
        naziv:"",
        drzava:"",
        godina_proizvodnje:"",
        audio:"",
        filmovi:[],
        drzave:[],
        godine:[],
        audioo:[]
        
      }
    }
  },
  methods:{
    unesiFilm(){
      let alertMessage=""
      var d = new Date();
      var n = d.getFullYear();
      for (const key in this.noviFilm) {
        if (Object.hasOwnProperty.call(this.noviFilm, key)) {
          console.log(key, this.noviFilm[key])
          if(this.noviFilm[key]=="" || this.noviFilm[key]==null){
            alertMessage=alertMessage+", "+key
          }
        }
      }
      if(alertMessage!=""){
        alert("Sva polja moraju biti popunjena: "+alertMessage)
        
      }else if(this.noviFilm.Ocjena>10 || this.noviFilm.Ocjena<0){
        alert("Ocjena mora biti između 0-10")
      }else if(this.noviFilm.Godina_proizvodnje<1920 || this.noviFilm.Godina_proizvodnje>n){
        alert("Film jos nije izaso")
      }
        
       else {
        const axios = require("axios")
        var film = this.noviFilm
        axios.post("https://cinema-app2.herokuapp.com/unos_filma",film)
        .then(function(response){
          console.log(response)
          alert(response.data)
        })
        .catch(function(error){
          console.log(error)
        })
      }
      
    },

    dobiSveFilmove(){
      //let filmovi =[]
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/dohvat_filmova")
      .then(response=>{
        console.log(response.data)
        this.trenutniFilmovi=response.data
        console.log(this.trenutniFilmovi)
      })
      .catch(error=>{
          console.log(error)
        })
      
    },

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
      axios.get("https://cinema-app2.herokuapp.com/FilmoviNaziv")
      .then(response=>{
        console.log(response.data)
        this.pretraga.filmovi=response.data
        
        console.log(this.pretraga.filmovi)
      })
      .catch(error=>{
          console.log(error)
        })
    },
    
    getGodine(){
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/Godine")
      .then(response=>{
        console.log(response.data)
        this.pretraga.godine=response.data
        
        console.log(this.pretraga.godine)
      })
      .catch(error=>{
          console.log(error)
        })
    },
    
    getDrzave(){
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/Drzave")
      .then(response=>{
        console.log(response.data)
        this.pretraga.drzave=response.data
        
        console.log(this.pretraga.drzave)
      })
      .catch(error=>{
          console.log(error)
        })
    },

    getAudio(){
      const axios = require("axios")
      axios.get("https://cinema-app2.herokuapp.com/Audio")
      .then(response=>{
        console.log(response.data)
        this.pretraga.audioo=response.data
        
        console.log(this.pretraga.audioo)
      })
      .catch(error=>{
          console.log(error)
        })
    },
    queryAgain(){
      console.log("Query again")
      const axios = require("axios")
      
      axios.post("https://cinema-app2.herokuapp.com/FiltriraniFIlmovi", this.pretraga)
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
