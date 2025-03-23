const PRODUCT_COLLECTION = "products";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "config/firebase.config";

const addProduct = async (data) => {
  try {
    const docRef = await addDoc(collection(db, PRODUCT_COLLECTION), data);
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(error, "err");
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, PRODUCT_COLLECTION));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(error, "err");
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const productRef = doc(db, PRODUCT_COLLECTION, id);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() };
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

const updateProduct = async (id, updatedData) => {
  try {
    if (!updatedData || Object.keys(updatedData).length === 0) {
      throw new Error("❌ Firestore Update Data is undefined or empty!");
    }

    const productRef = doc(db, PRODUCT_COLLECTION, id);
    await updateDoc(productRef, updatedData);

    return { id, ...updatedData };
  } catch (error) {
    console.error("❌ Firestore Update Failed:", error);
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, PRODUCT_COLLECTION, id));
    return { success: true, id };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const products = {
  addProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  updateProduct,
};
