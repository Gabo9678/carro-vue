<template>
  <div class="container mx-auto mt-8">
    <h2 class="text-3xl font-bold mb-4">Carrito de Compras</h2>
    
    <!-- Si el carrito tiene productos, se muestra la información -->
    <div v-if="cartStore.items.length > 0">
      <div class="flex justify-between font-semibold border-b pb-2 mb-4">
        <span class="w-1/3 text-left">Producto</span>
        <span class="w-1/3 text-center">Cantidad</span>
        <span class="w-1/3 text-left">Precio</span>
      </div>

      <!-- La lista de los productos -->
      <ul>
        <li v-for="producto in cartStore.items" :key="producto.id" class="flex justify-between items-center mb-2">
          <div class="w-1/3 flex items-center">
            <span>{{ producto.nombre }}</span>
          </div>
          <div class="w-1/3 flex items-center justify-center">
            <button class="btn btn-xs mx-1" @click="cartStore.decrementarCantidad(producto.id)">-</button>
            <span>{{ producto.cantidad }}</span>
            <button class="btn btn-xs mx-1" @click="cartStore.incrementarCantidad(producto.id)">+</button>
          </div>
          <div class="w-1/3 flex items-center justify-start">
            <span>$ {{ (producto.precio * producto.cantidad).toFixed(2) }}</span>
            <button class="btn btn-xs btn-error ml-2" @click="cartStore.eliminarProducto(producto.id)">Eliminar</button>
          </div>
        </li>
      </ul>
      
      <!-- Total y vaciar carrito -->
      <div class="mt-4 font-bold text-right">
        Total: $ {{ cartStore.total.toFixed(2) }}
      </div>
      <button class="btn btn-error mt-4" @click="cartStore.vaciarCarrito">Vaciar Carrito</button>
    </div>
    
    <!-- Si el carrito no tiene items, muestra vacio-->
    <p v-else>El carrito está vacío.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/useCartStore';

export default defineComponent({
  name: 'Carrito',
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  }
});
</script>
