<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="email" class="form-control m-1" type="email" placeholder="Enter your email">
      <input v-model="password" class="form-control m-1" type="password" placeholder="password">
      <input class="form-control btn btn-success m-1" type="submit" value="login">
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      email   : '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['logIn']),
    onSubmit() {
      let user = {
        'email'   : this.email,
        'password': this.password
      }
      this.logIn(user)
      this.$router.push('/')
    }
  }

}
</script>
