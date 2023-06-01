import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBH3jkbejA4SEBA7Iy6YLXbWZSc10nUZU4",
  authDomain: "projeto-ciclista-c12f3.firebaseapp.com",
  projectId: "projeto-ciclista-c12f3",
  storageBucket: "projeto-ciclista-c12f3.appspot.com",
  messagingSenderId: "270161860735",
  appId: "1:270161860735:web:0842e1d49109b8df5b074a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
