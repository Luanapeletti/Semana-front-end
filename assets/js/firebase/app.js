
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFhZPMaCMdp8ak1TsUbGpfWMbWGkFRntQ",
    authDomain: "projeto-teste-mundo.firebaseapp.com",
    projectId: "projeto-teste-mundo",
    storageBucket: "projeto-teste-mundo.appspot.com",
    messagingSenderId: "1051631363468",
    appId: "1:1051631363468:web:06209aa34726fab484a2a9"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default app