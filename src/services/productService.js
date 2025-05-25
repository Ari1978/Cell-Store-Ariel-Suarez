import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


export const getProducts = async (category = null) => {
  try {
    const db = getFirestore();
    const productsCollection = collection(db, "celulares");
    
    // Si hay categoría, aplicá el filtro
    let q = productsCollection;
    if (category) {
      q = query(productsCollection, where("category", "==", category));
    }

    const querySnapshot = await getDocs(q);

    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return products;

  } catch (error) {
    console.log("Error al cargar los productos", error);
    throw error;
  }
};
