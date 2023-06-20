
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBljZKU8wupEj9v6Dm3y6ADZnCipd-f0nI",
  authDomain: "tiktok---jornada-cacea.firebaseapp.com",
  projectId: "tiktok---jornada-cacea",
  storageBucket: "tiktok---jornada-cacea.appspot.com",
  messagingSenderId: "375861662871",
  appId: "1:375861662871:web:ce6511e4d46a63ba4f45d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db;