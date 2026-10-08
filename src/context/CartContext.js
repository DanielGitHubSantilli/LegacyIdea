// src/context/CartContext.js
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      let nuevoCarrito;
      if (existe) {
        nuevoCarrito = prev.map(p =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        nuevoCarrito = [...prev, { ...producto, cantidad: 1 }];
      }
      console.log("Carrito actualizado:", nuevoCarrito); // 👀
      return nuevoCarrito;
    });
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
}
