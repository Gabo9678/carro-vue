<template>
  <nav class="navbar bg-base-200 shadow-lg p-4">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-4xl" href="/">Cafecito</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/" class="">Home</router-link></li>
        <li>
          <router-link to="/carrito" class="">
            Carrito
            <span v-if="cartStore.itemCount > 0" class="badge badge-sm badge-primary ml-2">
              {{ cartStore.itemCount }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/useCartStore';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  }
});
</script>
