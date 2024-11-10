<template>
  <div class="card w-60 bg-base-100 shadow-xl border-2 border-black">
    <figure class="py-4 rounded">
      <img :src="producto.imagen" :alt="producto.nombre" class="product-image" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ producto.nombre }}</h2>
      <p>{{ producto.descripcion }}</p>
      <p class="font-bold">$ {{ producto.precio.toFixed(2) }}</p>
      <button class="btn btn-primary" @click="agregarAlCarrito">
        Añadir al carrito
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProductCard',
  props: {
    producto: {
      type: Object as PropType<{
        id: number;
        nombre: string;
        precio: number;
        imagen: string;
        descripcion: string;
      }>,
      required: true
    }
  },
  methods: {
    agregarAlCarrito() {
      this.$emit('agregar', this.producto);
    }
  }
});
</script>

<style scoped>
.card {
  width: 100%;
}

.product-image {
  width: 80%;
  height: 250px; /* Ajusta esta altura según tus preferencias */
  object-fit: cover;
  border-radius: 8px;
}
</style>
