
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWkRbVRU61NbAu1QMeZQNOmZk_i_caiNc",
  authDomain: "chatgpt-app-85d83.firebaseapp.com",
  projectId: "chatgpt-app-85d83",
  storageBucket: "chatgpt-app-85d83.appspot.com",
  messagingSenderId: "445099740103",
  appId: "1:445099740103:web:c5ffb223735802f82867e2",
  measurementId: "G-VVTJH85C68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);