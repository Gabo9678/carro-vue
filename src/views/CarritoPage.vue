<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Carrito de Compras</h1>
    <Carrito />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carrito from '../components/Carrito.vue';

export default defineComponent({
  name: 'CarritoPage',
  components: {
    Carrito
  }
});
</script>
