import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService"; // Asegurate que este import sea correcto
import Componente1 from "./Componente1";
import Loading from "./Loading";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { marca } = useParams();

  useEffect(() => {
    setLoading(true);

    const showProducts = new Promise(async (resolve, reject) => {
      try {
        const data = await getProducts(marca);
        if (data.length > 0) {
          setTimeout(() => resolve(data), 800); // Simula un delay como antes
        } else {
          reject(new Error("No se encontraron productos"));
        }
      } catch (error) {
        reject(error);
      }
    });

    showProducts
      .then((data) => setProducts(data))
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, [marca]);

  return (
    <div className="container">
      <p className="parrafo">{greeting}</p>
      {loading ? <Loading /> : <Componente1 products={products} loading={loading} />}
    </div>
  );
};

export default ItemListContainer;
