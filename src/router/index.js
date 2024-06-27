import { createRouter, createWebHashHistory } from 'vue-router';
import NavigationView from '../views/NavigationView.vue';
import SearchView from '../views/SearchView.vue';
import LocationDetailsView from '../views/LocationDetailsView.vue';
import LocationDetails from '../components/LocationDetails.vue';

const routes = [
  {
    path: '/',
    name: 'SearchView',
    component: SearchView,
    props: true // Pass props if needed
  },
  {
    path: '/navigation',
    name: 'NavigationView',
    component: NavigationView
  },
  {
    path: '/location-details/:id',
    name: 'LocationDetailsView',
    component: LocationDetailsView,
    props: true
  },
  {
    path: '/location/:id',
    name: 'LocationDetails',
    component: LocationDetails,
    props: true
  },
  // If NavigationForm.vue is part of NavigationView.vue
  // Remove this if it's not a standalone view
  {
    path: '/navigation-form/:id', // Example route for NavigationForm if standalone
    name: 'NavigationForm',
    component: () => import('../views/NavigationView.vue') // Lazy load if needed
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
