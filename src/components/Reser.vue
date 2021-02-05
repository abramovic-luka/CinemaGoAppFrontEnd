<template>
  <div class="Filmovi">
    <h3>Rezervacije</h3>
    <div class="card">
      <div class="card-header">
        Popis rezervacija
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
              <label>ID filma</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Datum unosa</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Datum prikazivanja</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Vrijeme prikazivanja</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Maksimalni broj ulaznica</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Trenutni broj ulaznica</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Dvorana</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
          </div>
          <div class="ml-auto text-right">
            <button type="submit" class="btn btn-primary my-2">Dodaj</button>
          </div>
        </form>
      </div>
    </div>

    <div class="card mt-5">
      <div class="card-header">
        Popis rezervacija
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
                  ID filma
                </th>
                <th>
                  Datum unosa
                </th>
                <th>
                  Datum prikazivanja
                </th>
                <th>
                  Vrijeme prikazivanja
                </th>
                <th>
                  Maksimalni broj ulaznica
                </th>
                <th>
                  Trenutni broj ulaznica
                </th>
                <th>
                  Dvorana
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

<<script>
  export default {
  
  data(){
    return{
      rezervacije:[]
    }
  },
  methods:{
    dobiSveRezervacije(){
      //let filmovi =[]
      const axios = require("axios")
      axios.get("http://localhost:3000/Rezervacije/Admin")
      .then(response=>{
        console.log(response.data)
        this.rezervacije=response.data
        console.log(this.rezervacije)
      })
      .catch(error=>{
          console.log(error)
        })
      
    },
    
  },
  
  mounted(){
    this.$nextTick(this.dobiSveRezervacije())
  }
}
</script>-->

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
