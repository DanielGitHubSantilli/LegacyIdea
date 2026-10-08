// src/pages/Carrito.js
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Carrito() {
  const { carrito } = useContext(CartContext);

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <main>
      <h2>Tu carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map(p => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.cantidad}</td>
                <td>${p.precio}</td>
                <td>${p.precio * p.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Total: ${total}</h3>
    </main>
  );
}
