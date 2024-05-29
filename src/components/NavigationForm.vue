<!-- src/components/NavigationForm.vue -->
<template>
  <div>
    <DestinationForm v-if="!destinationSet" @set-destination="setDestination" />
    <CurrentLocationForm v-else-if="destinationSet && !currentLocationSet" :destination="destination" @set-current-location="setCurrentLocation" />
    <NavigationInstructions v-else :destination="destination" />
  </div>
</template>

<script>
import DestinationForm from './DestinationForm.vue';
import CurrentLocationForm from './CurrentLocationForm.vue';
import NavigationInstructions from './NavigationInstructions.vue';

export default {
  data() {
    return {
      destination: '',
      currentLocation: '',
      destinationSet: false,
      currentLocationSet: false
    };
  },
  components: {
    DestinationForm,
    CurrentLocationForm,
    NavigationInstructions
  },
  methods: {
    setDestination(destination) {
      this.destination = destination;
      this.destinationSet = true;
    },
    setCurrentLocation(currentLocation) {
      this.currentLocation = currentLocation;
      this.currentLocationSet = true;
    }
  }
};
</script>

<style scoped>
/* Add styles if needed */
</style>
