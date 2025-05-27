import '../components/stylo.css';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const marcas = [
  { nombre: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", path: "/samsung" },
  { nombre: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg", path: "/xiaomi" },
  { nombre: "Readmi", logo: "https://novedadesxiaomi.com/wp-content/uploads/2024/11/Xiaomi-presenta-un-nuevo-logotipo-y-vision-de-REDMI-la.jpg.webp", path: "/redmi"},
  { nombre: "Motorola", logo: "https://www.movilzona.es/app/uploads-movilzona.es/2020/09/motorola-logo-pantalla-colores-930x487.png", path: "/motorola" },
  { nombre: "Iphone", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", path: "/iphone" },
  { nombre: "Accesorios", logo: "https://img.freepik.com/fotos-premium/logotipo-productos-moviles-productos-moviles_1189726-5309.jpg", path: "/accesorios" }
];

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="marcas-container">
      <p className="parrafo">{greeting}</p>
      <NavBar />
      <div className="marca-logos">
        {marcas.map(marca => (
          <Link to={marca.path} key={marca.nombre} className="marca-link">
            <img src={marca.logo} alt={marca.nombre} className="marca-logo-img" />
            <div className="marca-nombre">{marca.nombre}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;