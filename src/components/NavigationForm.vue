<template>
  <div>
    <form @submit.prevent="submitNavigation">
      <label for="currentLocation">Current Location:</label>
      <input 
        type="text" 
        v-model="currentLocation" 
        id="currentLocation" 
        required 
        @input="filterLocations"
        autocomplete="off"
      />
      <ul v-if="filteredLocations.length > 0" class="suggestions">
        <li 
          v-for="location in filteredLocations" 
          :key="location.id" 
          @click="selectLocation(location.name,location.id)"
        >
          {{ location.name }}
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { API_BASE_URL } from '../config'; // Import the base URL

export default {
  props: {
    destinationId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentLocation: '',
      fromId: '',
      locationId: parseInt(this.$route.params.id),
      locations: [],
      filteredLocations: []
    };
  },
  created() {
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
      if (this.currentLocation) {
        this.filteredLocations = this.locations.filter(location =>
          location.name.toLowerCase().includes(this.currentLocation.toLowerCase())
        );
      } else {
        this.filteredLocations = [];
      }
    },
    selectLocation(name, id) {
      this.currentLocation = name;
      this.fromId = id;
      this.filteredLocations = [];
    },
    submitNavigation() {
      const payload = {
        from: this.fromId,
        dest: this.locationId
      };
      console.log(payload);
      axios.post(`${API_BASE_URL}/user/path`, payload)
        .then(response => {
          console.log('Navigation data sent:', response.data);
          this.$emit('navigation-submitted', response.data.steps);
        })
        .catch(error => {
          console.error('Error sending navigation data:', error);
        });
    }
  }
};
</script>

<style scoped>
.suggestions {
  border: 1px solid #ddd;
  max-height: 150px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  background: white;
}

.suggestions li {
  padding: 10px;
  cursor: pointer;
}

.suggestions li:hover {
  background: #f0f0f0;
}
</style>
