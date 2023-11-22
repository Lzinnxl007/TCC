import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDT0e7vCu9UM7o-RE5AgTcQqovZOR5K_o0",
    authDomain: "desperdicio-zero-9430d.firebaseapp.com",
    projectId: "desperdicio-zero-9430d",
    storageBucket: "desperdicio-zero-9430d.appspot.com",
    messagingSenderId: "47396359215",
    appId: "1:47396359215:web:c15c04d00f3e15cea44ada",
    measurementId: "G-9VL6CLZJVB"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp