<template>
  <div class="Filmovi">
    <h3>Rezervacije</h3>
    <div class="card">
      <div class="card-header">
        Dodaj novi film
      </div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>ID</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
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
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Glumci</label>
              <input
                v-model="noviFilm.Glumci"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Drzava</label>
              <input
                v-model="noviFilm.Drzava"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Audio</label>
              <input
                v-model="noviFilm.Audio"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Titlovi</label>
              <input
                v-model="noviFilm.Titlovi"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Trajanje</label>
              <input
                v-model="noviFilm.Trajanje"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-grou col-md-3">
              <label>Opis</label>
              <input
                v-model="noviFilm.Opis"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Slika</label>
              <input
                v-model="noviFilm.Slika"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Pozadina</label>
              <input
                v-model="noviFilm.Pozadina"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Zanr</label>
              <input
                v-model="noviFilm.Zanr"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Ocjena</label>
              <input
                v-model="noviFilm.Ocjena"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                pattern="[0-10]+"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Trailer</label>
              <input
                v-model="noviFilm.Trailer"
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Godina proizvodnje</label>
              <input
                v-model="noviFilm.Godina_proizvodnje"
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
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  ID
                </th>
                <th>
                  Naziv
                </th>
                <th>
                  Strani Naziv
                </th>
                <th>
                  Redatelj
                </th>
                <th>
                  Glumci
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
                  Opis
                </th>
                <th>
                  Slika
                </th>
                <th>
                  Slika pozadina
                </th>
                <th>
                  Zanr
                </th>
                <th>
                  Ocjena
                </th>
                <th>
                  Trailer
                </th>
                <th>
                  Godina
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <template>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <span class="icon">
                      <i class="fa fa-check"></i>
                    </span>
                    <span class="icon">
                      <i class="fa fa-ban"></i>
                    </span>
                  </td>
                </template>
                <template>
                  <td>
                    f
                  </td>
                  <td>
                    f
                  </td>
                  <td>f</td>
                  <td>
                    <a href="#" class="icon">
                      <i class="fa fa-trash"></i>
                    </a>
                    <a href="#" class="icon">
                      <i class="fa fa-pencil"></i>
                    </a>
                  </td>
                </template>
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
      trenutniFilmovi:{

      }
    }
  },
  methods:{
    unesiFilm(){
      let alertMessage=""
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
        
      }else{
        const axios = require("axios")
        let film = this.noviFilm
        axios.post("http://localhost:3000/unos_filma",{film})
        .then(function(response){
          console.log(response)
        })
        .catch(function(error){
          console.log(error)
        })
      }
      
    },

    dobiSveFilmove(){
      const axios = require("axios")
        
        axios.get("http://localhost:3000/dohvat_filmova")
        .then(function(response){
          console.log(response)
          this.trenutniFilmovi = response.data
          console.log(this.trenutniFilmovi)
        })
        .catch(function(error){
          console.log(error)
        })
    },

    
    
  },
  /*
  mounted(){
    this.dobiSveFilmove()
  }*/
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
