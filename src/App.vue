<!--
https://getbootstrap.com/docs/4.3/components/forms/#overview
https://getbootstrap.com/docs/3.3/components/
https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_glyphs&stacked=h
-->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">CinemaGO</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <router-link class="nav-link" to="/login">Login</router-link>
        <router-link class="btn btn-outline-primary my-2 my-sm-0" to="/register"
          >Register</router-link
        >
      </form>
    </div>
  </nav>
  <br />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  background-color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}

#nav a.router-link {
  color: white;
}
</style>
