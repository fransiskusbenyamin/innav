<!-- src/components/RatingForm.vue -->
<template>
    <div v-if="show">
      <h2>Rate the Navigation</h2>
      <div>
        <span v-for="star in 5" :key="star" @click="setRating(star)" :class="{ selected: star <= rating }">
          ★
        </span>
      </div>
      <button @click="submitRating">Submit</button>
    </div>
  </template>
  
  <script>
  // import { db } from '../firebase';
  
  export default {
    data() {
      return {
        rating: 0,
        show: true
      };
    },
    methods: {
      setRating(star) {
        this.rating = star;
      },
      submitRating() {
        // Placeholder for future Firebase integration
        /* 
        try {
          await db.collection('ratings').add({
            rating: this.rating,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
          this.show = false;
          alert('Thank you for your feedback!');
        } catch (error) {
          console.error('Error submitting rating: ', error);
        }
        */
        this.show = false;
        alert(`Thank you for your feedback! You rated: ${this.rating} stars`);
      }
    }
  };
  </script>
  
  <style scoped>
  span {
    font-size: 2rem;
    cursor: pointer;
  }
  .selected {
    color: gold;
  }
  </style>
  