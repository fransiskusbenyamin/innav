import { createRouter, createWebHashHistory } from 'vue-router'
import NavigationView from '../views/NavigationView.vue'
import SearchView from '../views/SearchView.vue'
import LocationDetailsView from '../views/LocationDetailsView.vue'
import LocationDetails from '../components/LocationDetails.vue'
import NavigationForm from '../components/NavigationForm.vue'; // Import the NavigationForm component

const routes = [
  {
    path: '/',
    name: 'SearchView',
    component: SearchView,
    props: route => ({ locationName: route.params.locationName }) // Receive locationName parameter
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: NavigationView
  },
  {
    path: '/navigation-form', // Define route for NavigationForm
    name: 'NavigationForm',
    component: NavigationForm
  },
  {
    path: '/location-details/:id', // Define a new route for location details view
    name: 'LocationDetailsView',
    component: LocationDetailsView,
    props: true
  },
  {
    path: '/location/:id',
    name: 'LocationDetails',
    component: LocationDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
