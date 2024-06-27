<template>
  <div>
    <h2>Navigation Instructions</h2>
    <ul>
      <li v-for="(step, index) in steps.path" :key="index" :class="{ active: index + 1 === currentStep }">
        Step {{ index + 1 }}: Walk towards {{ step_names[index] }}
      </li>
    </ul>
    <button @click="nextStep" :disabled="currentStep > steps.path.length">Next Step</button>
    <RatingForm v-if="currentStep > steps.path.length" />
  </div>
</template>

<script>
import RatingForm from './RatingForm.vue';

export default {
  props: ['steps'],
  data() {
    return {
      currentStep: 1,
      step_names: [] // Initialize an array to store step names
    };
  },
  components: {
    RatingForm
  },
  methods: {
    nextStep() {
      if (this.currentStep <= this.steps.path.length) {
        this.currentStep += 1;
      }
    }
  },
  mounted() {
    // Extracting step names from props on mount
    this.step_names = this.steps.path_names;
  },
  watch: {
    steps: {
      handler(newSteps) {
        // Update step names when steps prop changes
        this.step_names = newSteps.path_names;
      },
      immediate: true // Log immediately on component mount
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
