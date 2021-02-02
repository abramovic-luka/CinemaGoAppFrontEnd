<template>
  <div class="Filmovi">
    <h3>Rezervacije</h3>
    <div class="card">
      <div class="card-header">
        Dodaj novog korisnika
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
              <label>Ime</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Prezime</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Telefon</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-3">
              <label>Email</label>
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
              <label>Lozinka</label>
              <input
                type="text"
                class="form-control ml-sm-2 mr-sm-4 my-2"
                required
              />
            </div>
            <div class="form-group col-md-3">
              <label>Potvrda</label>
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
        Popis korisnika
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
                  Ime
                </th>
                <th>
                  Prezime
                </th>
                <th>
                  Telefon
                </th>
                <th>
                  Email
                </th>
                <th>
                  Slika
                </th>
                <th>
                  Lozinka
                </th>
                <th>
                  Potvrda
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
