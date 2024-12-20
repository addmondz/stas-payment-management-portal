import Alpine from 'alpinejs';
import { createApp, h } from 'vue';  // Import Vue 3
import { createInertiaApp } from '@inertiajs/vue3';  // Import createInertiaApp for Vue 3


// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

// Initialize Vue 3 with Inertia using createInertiaApp
createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`).then((module) => module.default), // Dynamically resolve components
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        // Register Inertia plugin and ZiggyVue with Ziggy data
        app.use(plugin);

        app.mount(el);
    },
});
