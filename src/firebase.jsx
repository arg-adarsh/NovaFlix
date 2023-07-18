import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: ,
//   authDomain: ,
//   projectId:               // use your config scrip from firebase
//   storageBucket: ,
//   messagingSenderId:
//   appId:
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
