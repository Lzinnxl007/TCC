// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js')
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyDT0e7vCu9UM7o-RE5AgTcQqovZOR5K_o0",
    authDomain: "desperdicio-zero-9430d.firebaseapp.com",
    projectId: "desperdicio-zero-9430d",
    storageBucket: "desperdicio-zero-9430d.appspot.com",
    messagingSenderId: "47396359215",
    appId: "1:47396359215:web:c15c04d00f3e15cea44ada",
    measurementId: "G-9VL6CLZJVB"
}
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig)
// eslint-disable-next-line no-undef
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  }
  self.registration.showNotification(notificationTitle, notificationOptions)
})