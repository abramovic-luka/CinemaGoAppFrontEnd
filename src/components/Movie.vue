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
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Strani naziv</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Redatelj</label>
              <input
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
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Drzava</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Audio</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Titlovi</label>
              <input
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
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-grou col-md-3">
              <label>Opis</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Slika</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Pozadina</label>
              <input
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
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Ocjena</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Trailer</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Godina proizvodnje</label>
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
