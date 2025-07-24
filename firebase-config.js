// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyBkTKRxgG1DrnqnRw0d3_aS4udDMqEX4R0",
    authDomain: "d-photo-db139.firebaseapp.com",
    projectId: "d-photo-db139",
    storageBucket: "d-photo-db139.firebasestorage.app",
    messagingSenderId: "17177142009",
    appId: "1:17177142009:web:ed7b92d24ba91ea9cc3828",
    measurementId: "G-SMC8CRPNJX"
};

firebase.initializeApp(firebaseConfig);
// const db = firebase.database();
const db = firebase.firestore();

