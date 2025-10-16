
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA6MdZ62XZj5qMShHWebaz6nrjWOoRVBa4",
  authDomain: "tweeter-message.firebaseapp.com",
  projectId: "tweeter-message",
  storageBucket: "tweeter-message.firebasestorage.app",
  messagingSenderId: "539097243023",
  appId: "1:539097243023:web:93aa84dbcd42efc8b3bffa"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};