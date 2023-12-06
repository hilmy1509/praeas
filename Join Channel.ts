<!-- JoinChannel.vue -->
<template>
  <div>
    <h2>Join Channel</h2>
    <form @submit.prevent="joinChannel">
      <label>Channel Name:</label>
      <input v-model="channelName" required>
      <button type="submit">Join Channel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channelName: ""
    };
  },
  methods: {
    joinChannel() {
      // Panggil endpoint join channel di Payload CMS menggunakan Axios
    }
  }
};
</script>
