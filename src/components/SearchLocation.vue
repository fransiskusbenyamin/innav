<!-- src/components/SearchLocation.vue -->
<template>
    <div>
      <h2>Search for a Location</h2>
      <input v-model="searchQuery" placeholder="Enter location name" @input="filterLocations" />
      <ul v-if="filteredLocations.length">
        <li v-for="location in filteredLocations" :key="location.id" @click="showLocationDetails(location)">
          {{ location.name }}
        </li>
      </ul>
      <p v-else>No locations found</p>
      <router-link v-if="selectedLocation" :to="{ name: 'LocationDetails', params: { id: selectedLocation.id }}">View Details</router-link>
    </div>
  </template>
  
  <script>
  import { locations } from '../data/locations';
  
  export default {
    data() {
      return {
        searchQuery: '',
        locations: locations,
        filteredLocations: [],
        selectedLocation: null
      };
    },
    methods: {
      filterLocations() {
        this.filteredLocations = this.locations.filter(location =>
          location.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      showLocationDetails(location) {
        this.selectedLocation = location;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  ../data/locations