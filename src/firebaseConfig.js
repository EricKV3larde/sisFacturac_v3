// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDolGbzbW8t97_hYqaH_ZaWqYDRDtu4hqU",
  authDomain: "testing-5e460.firebaseapp.com",
  projectId: "testing-5e460",
  storageBucket: "testing-5e460.appspot.com",
  messagingSenderId: "90058853859",
  appId: "1:90058853859:web:c08c7bf114ea540ec6e4d6",
  measurementId: "G-T93DG8E2FF"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios que necesitas
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
