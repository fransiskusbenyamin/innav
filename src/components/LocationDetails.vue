<template>
  <div>
    <h1>{{ location.name }}</h1>
    <p>{{ location.description }}</p>
    <NavigationForm :destinationId="location.id" />
  </div>
</template>

<script>
import NavigationForm from '@/components/NavigationForm.vue';

export default {
  components: {
    NavigationForm
  },
  data() {
    return {
      location: {
        id: 'some-location-id', // Replace this with actual location data
        name: 'Some Location',
        description: 'Description of the location'
      }
    };
  }
};
</script>
