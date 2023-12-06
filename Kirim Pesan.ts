<!-- SendMessage.vue -->
<template>
  <div>
    <h2>Send Message</h2>
    <form @submit.prevent="sendMessage">
      <label>Message:</label>
      <input v-model="messageText" required>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageText: ""
    };
  },
  methods: {
    sendMessage() {
      // Panggil endpoint send message di Payload CMS menggunakan Axios
    }
  }
};
</script>
