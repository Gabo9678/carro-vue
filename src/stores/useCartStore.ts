import { defineStore } from 'pinia';

// Se define como se vera el tipo "Producto"
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
  cantidad: number; 

}

// Store de pinia
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Producto[]
  }),
  getters: {
    // Total de precios en el carrito
    total: (state) => state.items.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    // Cantidad total de productos en el carrito
    itemCount: (state) => state.items.reduce((acc, item) => acc + item.cantidad, 0) // Contador de todos los items

  },
  actions: {
    // Agrega un producto al carrito
    agregarProducto(producto: Producto) {
      const productoExistente = this.items.find(item => item.id === producto.id);
      if (productoExistente) {
        productoExistente.cantidad += 1;
      } else {
        this.items.push({ ...producto, cantidad: 1});
      }
    },
    // Elimina productos del carro
    eliminarProducto(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    // Vaciar todo el carrito
    vaciarCarrito() {
      this.items = [];
    },

    // Incrementar la cantidad de items que se quieren dentro del carrito
    incrementarCantidad(id: number) {
    const producto = this.items.find(item => item.id === id);
    if (producto) producto.cantidad += 1;
    },

    // decrementa la cantidad de items que se quieren dentro del carrito
    decrementarCantidad(id: number) {
      const producto = this.items.find(item => item.id === id);
      if (producto && producto.cantidad > 1) {
        producto.cantidad -= 1;
      } else {
        this.eliminarProducto(id); // Elimina el producto si la cantidad es 0
      }
    }
  }
});
