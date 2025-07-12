// firebase-auth.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js';

const firebaseConfig = {
  apiKey: "AIzaSyBkLRJxWnw_8x8gJyBw1vQdQ7YH3q9X9ZQ",
  authDomain: "kas-qc-firebase.firebaseapp.com",
  projectId: "kas-qc-firebase",
  storageBucket: "kas-qc-firebase.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Fungsi Login
export async function handleLogin(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    throw error;
  }
}

// Fungsi Register
export async function handleRegister(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", userCredential.user.uid), {
      name,
      email,
      role: 'qc',
      createdAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    throw error;
  }
}

// Cek Status Auth
export function checkAuthState() {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
}
