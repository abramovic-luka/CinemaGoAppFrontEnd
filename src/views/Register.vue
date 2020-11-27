<template>
  <div class="container">
    <h1>Register to CinemaGo</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="fullName"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="reenterPassword"
              placeholder="Reenter Password"
            />
          </div>
          <br />
          <button type="submit" class="btn-lg btn-primary">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
