import firebase from "../Config/firebase";

export const create = async (data) => {
  const responseUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password);
  if (responseUser) {
    
    await firebase.firestore().collection("usuarios").add({
      name: data.name,
      lastname: data.lastname,
      userId: responseUser.user.uid,
    });
    return responseUser.user.uid;
  }
};

export const authenticate = async (email, password) => {
  const responseUser = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  const userId = responseUser?.user?.uid;
  let user = null;
  if (userId) {
    user = await firebase
      .firestore()
      .collection("usuarios")
      .where("userId", "==", userId)
      .get();
  }
  return user?.docs[0].data() || null;
};