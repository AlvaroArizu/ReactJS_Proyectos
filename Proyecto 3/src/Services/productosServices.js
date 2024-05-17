import firebase from "../Config/firebase";

export const getProductos = async () => {
  return firebase.firestore().collection("productos").get();
};

export const getProductosById = async (id) => {
  return firebase.firestore().doc(`productos/${id}`).get();
};

export const create = async (data) => {
  return firebase.firestore().collection("productos").add(data);
};

export const update = async (id, data) => {
  return firebase.firestore().doc(`productos/${id}`).set(data);
};

export const deleteProducto = async (id) => {
  return firebase.firestore().doc(`productos/${id}`).delete();
};
