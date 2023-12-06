<!-- CreateChannel.vue -->
<template>
  <div>
    <h2>Create Channel</h2>
    <form @submit.prevent="createChannel">
      <label>Channel Name:</label>
      <input v-model="channelName" required>
      <button type="submit">Create Channel</button>
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
    createChannel() {
      // Panggil endpoint create channel di Payload CMS menggunakan Axios
    }
  }
};
</script>
