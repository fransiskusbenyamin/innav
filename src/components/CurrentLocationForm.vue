<!-- src/components/CurrentLocationForm.vue -->
<template>
    <div>
      <h2>Enter Your Current Location</h2>
      <form @submit.prevent="proceedToInstructions">
        <div>
          <label for="currentLocation">Current Location:</label>
          <input v-model="currentLocation" id="currentLocation" required />
        </div>
        <button type="submit">Find My Way Here!</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['destination'],
    data() {
      return {
        currentLocation: ''
      };
    },
    methods: {
      proceedToInstructions() {
        this.$emit('set-current-location', this.currentLocation);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  