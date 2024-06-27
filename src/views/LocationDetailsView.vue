<template>
    <div v-if="location">
      <h2>{{ location.name }}</h2>
      <img :src="location.photo" :alt="location.name" class="location-image" />
      <p>{{ location.description }}</p>
      <button @click="navigateToLocation">Navigate Here</button>
    </div>
    <div v-else>
      <p>Location details not found.</p>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import { API_BASE_URL } from '../config'; // Import the base URL

export default {
  name: 'LocationDetailsView',
  data() {
    return {
      location: null
    };
  },
  created() {
    const locationId = parseInt(this.$route.params.id);
    this.fetchLocation(locationId);
  },
  methods: {
    async fetchLocation(locationId) {
      try {
        const response = await axios.get(`${API_BASE_URL}/user/node/9/${locationId}`);
        this.location = response.data.data;
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    },
    navigateToLocation() {
      if (this.location) {
        // Navigate to NavigationForm route with location name pre-filled in destination input
        this.$router.push({ name: 'NavigationForm', query: { destination: this.location.locationId } });
      }
    }
  }
};
</script>
  ../data/locations