<!-- src/components/NavigationInstructions.vue -->
<template>
  <div>
    <h2>Navigation Instructions</h2>
    <ul>
      <li v-for="step in navigationSteps" :key="step.step" :class="{ active: step.step === currentStep }">
        Step {{ step.step }}: {{ step.instruction }}
      </li>
    </ul>
    <button @click="nextStep" :disabled="currentStep > navigationSteps.length">Next Step</button>
    <RatingForm v-if="currentStep > navigationSteps.length" />
  </div>
</template>

<script>
import dummyNavigation from '../data/dummyNavigation';
import RatingForm from './RatingForm.vue';

export default {
  props: ['destination'],
  data() {
    return {
      navigationSteps: dummyNavigation,
      currentStep: 1
    };
  },
  components: {
    RatingForm
  },
  methods: {
    nextStep() {
      if (this.currentStep <= this.navigationSteps.length) {
        this.currentStep += 1;
      }
    }
  }
};
</script>

<style scoped>
.active {
  font-weight: bold;
  color: blue;
}
</style>
