import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBbMoP0_Mqo2rRFoPZSMv6MHIRbT3btq8I",
  authDomain: "hotelorant.firebaseapp.com",
  projectId: "hotelorant",
  storageBucket: "hotelorant.appspot.com",
  messagingSenderId: "5036732617",
  appId: "1:5036732617:web:3b78f742a49e0675305d18",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const storage = firebase.storage();

export { storage, firebase as default };
