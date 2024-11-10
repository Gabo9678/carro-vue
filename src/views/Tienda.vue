<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">Productos</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Ciclo para mostrar todos los productos en el Home -->
      <ProductCard
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
        @agregar="agregarAlCarrito"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import productosData from '../data/productos.json';
import { useCartStore } from '../stores/useCartStore';

export default defineComponent({
  name: 'Tienda',
  components: {
    ProductCard
  },
  setup() {
    const productos = ref(productosData);
    const cartStore = useCartStore();

    const agregarAlCarrito = (producto: any) => {
      cartStore.agregarProducto(producto); 
    };

    return {
      productos,
      agregarAlCarrito
    };
  }
});
</script>
