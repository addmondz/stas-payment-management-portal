/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';

/**
 * Create a Vue application instance and register components.
 */
const app = createApp({});

// Register components globally (if needed)
app.component('example-component', ExampleComponent);

// Mount the Vue application to the DOM
app.mount('#app');
