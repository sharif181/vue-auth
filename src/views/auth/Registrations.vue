<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="email" type="email" class="form-control" placeholder="Email">
      <input v-model="username" type="username" class="form-control" placeholder="Username">
      <input v-model="password" type="password" class="form-control" placeholder="Password">
      <input v-model="confirm_password" type="password" class="form-control" placeholder="Confirm password">
      <input type="submit" class="form-control btn btn-primary" value="Sign Up">
    </form>
  </div>
</template>

<script>
export default {
  name: "Registrations",
  data() {
    return {
      email           : "",
      username        : "",
      password        : "",
      confirm_password: ""
    }
  },
  methods: {
    onSUbmit(){

    }
  }
}

</script>
