<template>
  <div>
    <div class="search-bar">
      <input v-model="searchQuery" placeholder="Search for locations..." @input="filterLocations" />
    </div>
    <div class="location-grid">
      <div v-for="location in filteredLocations" :key="location.id" class="location-card">
        <img :src="location.imageUrl" :alt="location.name" class="location-image" />
        <h3>{{ location.name }}</h3>
        <img :src="location.photo" alt="Location photo" class="location-photo" />
        <p>{{ location.description }}</p>
        <!-- <p>{{ location.photo }}</p> -->
        <router-link :to="{ name: 'LocationDetailsView', params: { id: location.id } }">
          <button>View Location Page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< Updated upstream
import { locations } from '../data/locations';
=======
import axios from 'axios';
import { API_BASE_URL } from '../config'; // Import the base URL
>>>>>>> Stashed changes

export default {
  name: 'SearchView',
  data() {
    return {
      searchQuery: '',
      locations: [], // Initialize as an empty array
      filteredLocations: [] // Initially display no locations until data is fetched
    };
  },
  created() {
    // Lifecycle hook to fetch data when component is created
    this.fetchLocations();
  },
  methods: {
    async fetchLocations() {
      try {
        const response = await axios.get(`${API_BASE_URL}/user/node/9`);
        console.log('Locations:', response.data.data);
        this.locations = response.data.data;
        this.filteredLocations = response.data.data;
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    },
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
<<<<<<< Updated upstream
  text-align: center;
}

.location-card img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.location-card h3 {
  margin-top: 10px;
=======
  text-align: center; /* Center-align the contents */
}

.location-photo {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
>>>>>>> Stashed changes
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
