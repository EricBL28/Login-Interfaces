import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqTb2gpL99YaXLfAqanYNNy0-tBSyhYis",
  authDomain: "fir-login-415b9.firebaseapp.com",
  projectId: "fir-login-415b9",
  storageBucket: "fir-login-415b9.firebasestorage.app",
  messagingSenderId: "398692627189",
  appId: "1:398692627189:web:0b3389b0c7293f831a0bbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);