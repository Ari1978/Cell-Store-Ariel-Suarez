import { getFirestore, collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

export const getProducts = async (marca = null) => {
    try {
        const db = getFirestore();
        const productsCollection = collection(db, "Celulares");
        let q;

        if (marca) {
            if (Array.isArray(marca)) {
                // Filtrar por varias marcas con "in"
                q = query(productsCollection, where("marca", "in", marca));
            } else {
                // Filtrar por una sola marca
                q = query(productsCollection, where("marca", "==", marca));
            }
        } else {
            q = productsCollection;
        }

        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;
    } catch (error) {
        console.error("Error al cargar los productos:", error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const db = getFirestore();
        const docRef = doc(db, "Celulares", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error("No se encontró el producto");
        }
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        throw error;
    }
};
