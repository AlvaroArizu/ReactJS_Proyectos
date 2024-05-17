import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

console.log("Firebase", import.meta.env.VITE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "dr2024-6bd21",
  storageBucket: "dr2024-6bd21.appspot.com",
  messagingSenderId: "505902492166",
  appId: "1:505902492166:web:b6601438fe77f04bb17187",
  measurementId: "G-F0D8GQSDR4",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
