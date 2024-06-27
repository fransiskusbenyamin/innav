<template>
  <div>
    <NavigationForm v-if="showForm" @navigation-submitted="handleNavigationSubmitted" />
    <NavigationInstructions v-else :steps="navigationSteps" />
  </div>
</template>

<script>
import NavigationForm from '../components/NavigationForm.vue';
import NavigationInstructions from '../components/NavigationInstructions.vue';

export default {
  components: {
    NavigationForm,
    NavigationInstructions
  },
  data() {
    return {
      showForm: true,
      navigationSteps: [] // Initialize navigationSteps data
    };
  },
  methods: {
    handleNavigationSubmitted(steps) {
      if (steps) {
        this.showForm = false;
        this.navigationSteps = steps.data; // Assuming steps.data contains the array of steps
      }
    }
  }
};
</script>

<style scoped>
/* Add styles if needed */
</style>
