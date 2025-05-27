import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./page/ItemDetail";
import Cart from "./page/Cart";
import NotFound from "./page/NotFound";
import About from "./page/About";
import Home from "./page/Home";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <PrimeReactProvider>
        <BrowserRouter basename="/Cell-Store-Ariel-Suarez">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
            <Route path="/casa" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </ShoppingCartProvider>
  );
};

export default App;
