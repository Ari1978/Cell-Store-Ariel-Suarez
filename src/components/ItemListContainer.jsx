import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsData from "../data/products";
import Componente1 from "./Componente1";
import Loading from "./Loading";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { marca } = useParams();

  useEffect(() => {
    setLoading(true);
    const showProducts = new Promise((resolve, reject) => {
      if (productsData.length > 0) {
        setTimeout(() => {
          resolve(productsData);
        }, 1000);
      } else {
        reject("No se pueden mostrar los productos");
      }
    });

    showProducts
      .then((data) => {
        if (marca) {
          setProducts(
            data.filter(
              (p) => p.marca && p.marca.toLowerCase() === marca.toLowerCase()
            )
          );
        } else {
          setProducts(data);
        }
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  }, [marca]);

  return (
    <div className="container">
      <p className="parrafo">{greeting}</p>
      {loading ? <Loading /> : <Componente1 products={products} />}
    </div>
  );
};

export default ItemListContainer;
