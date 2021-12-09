<template>
  <div>
    <div v-if="!isLoggedInValue">
      <ul class="nav justify-content-end container bg-light">
        <li class="nav-item">
          <router-link :to="{ name: 'Login'}" class="nav-link">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Signup'}">Sign Up</router-link>
        </li>
      </ul>
    </div>
    <div v-else class="container d-flex justify-content-end">
      <button @click="logOut" class="btn btn-danger"> Logout</button>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
  computed: {
    isLoggedInValue: function () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods : {
    ...mapActions(['logOut'])
  }
}
</script>
