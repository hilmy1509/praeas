<!-- Login.vue -->
<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label>Username:</label>
      <input v-model="username" required>
      <label>Password:</label>
      <input v-model="password" type="password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // Panggil endpoint login di Payload CMS menggunakan Axios
    }
  }
};
</script>
