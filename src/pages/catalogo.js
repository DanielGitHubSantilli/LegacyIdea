// src/pages/Catalogo.js
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const { agregarAlCarrito } = useContext(CartContext);

  // 👇 Estado para el mensaje
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("/data/productos.json")
      .then(res => res.json())
      .then(data => {
        console.log("Productos cargados:", data);
        setProductos(data);
      })
      .catch(err => console.error("Error cargando productos:", err));
  }, []);

  // 👇 Función que agrega y muestra mensaje
  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    setMensaje(`✅ Agregaste ${producto.nombre} al carrito`);
    setTimeout(() => setMensaje(""), 2000); // se borra a los 2 segundos
  };

  return (
    <main>
      <h2>Catálogo de productos</h2>

      {/* 👇 Mostrar mensaje si existe */}
      {mensaje && <p className="mensaje">{mensaje}</p>}

      <section className="grid-catalogo">
        {productos.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          productos.map(p => (
            <article key={p.id} className="producto">
              <img src={p.imagen} alt={p.nombre} />
              <h3>{p.nombre}</h3>
              <p>${p.precio}</p>
              <button onClick={() => handleAgregar(p)}>
                Agregar al carrito
              </button>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

