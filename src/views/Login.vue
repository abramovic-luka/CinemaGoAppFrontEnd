<template>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <div class="container" id="login">
    <h1>Login to CinemaGo</h1>
    <br />
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
              placeholder="Password"
              v-model="password"
            />
          </div>
          <button v-on:click="fun">Login</button>
          <!--<button type="submit" class="btn btn-primary">Login</button>-->
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script src="/login.js">
//export default {};

</script>

<style scoped></style>
