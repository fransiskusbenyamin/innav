<!-- src/components/ShopDetails.vue -->
<template>
    <div v-if="location">
      <h2>{{ location.name }}</h2>
      <p>{{ location.description }}</p>
      <!-- Add more details display here -->
    </div>
    <div v-else>
      <p>Shop details not found.</p>
    </div>
  </template>
  
  <script>
  import { locations } from '../data/locations'; // Import the locations array

  export default {
  props: {
    locationId: {
      type: Number,
      required: true
    }
  },
  computed: {
    location() {
      return locations.find(location => location.id === this.locationId);
    }
  }
};
</script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  ../data/locations