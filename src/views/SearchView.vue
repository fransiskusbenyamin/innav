<!-- src/views/SearchView.vue -->
<template>
  <div>
    <div class="search-bar">
      <input v-model="searchQuery" placeholder="Search for locations..." @input="filterLocations" />
    </div>
    <div class="location-grid">
      <div v-for="location in filteredLocations" :key="location.id" class="location-card">
        <h3>{{ location.name }}</h3>
        <p>{{ location.description }}</p>
        <router-link :to="{ name: 'LocationDetailsView', params: { id: location.id } }">
          <button>View Location Page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { locations } from '../data/locations'; // Import the locations array

export default {
  name: 'SearchView',
  data() {
    return {
      searchQuery: '',
      locations: locations,
      filteredLocations: locations // Initially display all locations
    };
  },
  methods: {
    filterLocations() {
      this.filteredLocations = this.locations.filter(location =>
        location.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}

.location-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.location-card {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
}

.location-card button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.location-card button:hover {
  background-color: #0056b3;
}
</style>
../data/locations