<template>
  <div>
    <NavigationForm v-if="showForm" @navigation-submitted="handleNavigationSubmitted" />
    <NavigationInstructions v-else :navigationSteps="navigationSteps" />
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
      navigationSteps: []
    };
  },
  methods: {
    handleNavigationSubmitted(steps) {
      this.navigationSteps = steps;
      this.showForm = false;
    }
  }
};
</script>

<style scoped>
/* Add styles if needed */
</style>
