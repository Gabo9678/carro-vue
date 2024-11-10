import { createRouter, createWebHistory } from 'vue-router';
import Tienda from './views/Tienda.vue';
import Carrito from './components/Carrito.vue';

const routes = [
  { path: '/', component: Tienda, name: 'Home' },
  { path: '/carrito', component: Carrito, name: 'Carrito' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
