import './styles.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Catalogo from "./pages/catalogo";
import Carrito from "./pages/carrito";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <h1>NORTE</h1>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/catalogo">Catálogo</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

          <footer>
            <p>&copy; 2026 NORTE</p>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
