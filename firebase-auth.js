// firebase-auth.js

// Konfigurasi Firebase (PASTIKAN SAMA DI SEMUA FILE)
const firebaseConfig = {
  apiKey: "AIzaSyBkLRJxWnw_8x8gJyBw1vQdQ7YH3q9X9ZQ",
  authDomain: "kas-qc-firebase.firebaseapp.com",
  projectId: "kas-qc-firebase",
  storageBucket: "kas-qc-firebase.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

// Inisialisasi Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Ekspor modul Firebase yang digunakan
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Fungsi umum
function checkAuth() {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) resolve(user);
      else window.location.href = 'index.html';
    });
  });
}

// Ekspor untuk digunakan di file lain
export { auth, db, storage, checkAuth };
