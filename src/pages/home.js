// src/pages/Home.js
export default function Home() {
  return (
    <main>
      <h2>Bienvenido a NORTE</h2>
      <p>
        Este es el sitio oficial de NORTE. Aquí podrás explorar nuestro catálogo de productos,
        agregar lo que necesites al carrito y finalizar tu compra de manera sencilla.
      </p>
      <section>
        <h3>Navegación rápida</h3>
        <ul>
          <li><a href="/catalogo">Ir al Catálogo</a></li>
          <li><a href="/carrito">Ver tu Carrito</a></li>
        </ul>
      </section>
    </main>
  );
}
