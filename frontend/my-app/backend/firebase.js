import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpIgGdoIhxFdcOUbfWj6GFZ0wLLNORoZk",
  authDomain: "flash-chat-6bcbd.firebaseapp.com",
  projectId: "flash-chat-6bcbd",
  storageBucket: "flash-chat-6bcbd.firebasestorage.app",
  messagingSenderId: "252077978947",
  appId: "1:252077978947:web:b1f02fe460288f14752bf6",
  measurementId: "G-HK6KLN8RN4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);