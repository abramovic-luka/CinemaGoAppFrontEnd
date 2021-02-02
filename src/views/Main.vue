<template>
  <div>
    <div class="d-flex justify-content-center">
      <div @click="selectedComponent = 'Movie'" class="p-2 m-2 btn btn-primary">
        Filmovi
      </div>
      <div @click="selectedComponent = 'User'" class="p-2 m-2 btn btn-primary">
        Korisnici
      </div>
      <div @click="selectedComponent = 'Reser'" class="p-2 m-2 btn btn-primary">
        Rezervacije
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <component :is="selectedComponent"></component>
    </div>
  </div>
</template>

<script>
import Movie from "../components/Movie.vue";
import User from "../components/User.vue";
import Reser from "../components/Reser.vue";

export default {
  components: { Movie, User, Reser },

  data() {
    return {
      selectedComponent: "Movie"
    };
  }
};
</script>
