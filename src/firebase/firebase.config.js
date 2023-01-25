
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apikey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyDXHtaWac-kopiITqCnhVEFjRiCD09hAcg",
    authDomain: "jobbox-7410c.firebaseapp.com",
    projectId: "jobbox-7410c",
    storageBucket: "jobbox-7410c.appspot.com",
    messagingSenderId: "890930653764",
    appId: "1:890930653764:web:cd8743fe9420902cbc6a11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;