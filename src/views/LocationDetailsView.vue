<template>
    <div v-if="location">
      <h2>{{ location.name }}</h2>
      <p>{{ location.description }}</p>
      <button @click="navigateToLocation">Navigate Here</button>
    </div>
    <div v-else>
      <p>Location details not found.</p>
    </div>
  </template>
  
  <script>
  import { locations } from '../data/locations';
  
  export default {
    name: 'LocationDetailsView',
    data() {
      return {
        location: null
      };
    },
    created() {
      const locationId = parseInt(this.$route.params.id);
      this.location = locations.find(location => location.id === locationId);
    },
    methods: {
      navigateToLocation() {
        if (this.location) {
          // Navigate to NavigationForm route with location name pre-filled in destination input
          this.$router.push({ name: 'NavigationForm', query: { destination: this.location.name } });
        }
      }
    }
  };
  </script>
  ../data/locations