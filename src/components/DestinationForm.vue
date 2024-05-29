<!-- src/components/DestinationForm.vue -->
<template>
    <div>
      <h2>Enter Your Destination</h2>
      <form @submit.prevent="proceedToCurrentLocation">
        <div>
          <label for="destination">Destination:</label>
          <input v-model="destination" id="destination" required />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        destination: this.$route.query.destination || '' // Initialize with query parameter if available
      };
    },
    methods: {
      proceedToCurrentLocation() {
        this.$emit('set-destination', this.destination);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  