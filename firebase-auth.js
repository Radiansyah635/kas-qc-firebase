// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js';

const firebaseConfig = {
  apiKey: "AIzaSyD0RL0zvv4DL9EBax3XouugVZpkHdzyVNQ",
  authDomain: "wallet-qc-local-storage.firebaseapp.com",
  projectId: "wallet-qc-local-storage",
  storageBucket: "wallet-qc-local-storage.firebasestorage.app",
  messagingSenderId: "443546801664",
  appId: "1:443546801664:web:d520fd8d2f311edd20aae5",
  measurementId: "G-KVKSD7ES9P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Auth Functions
export async function loginUser(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function registerUser(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, userId: userCredential.user.uid };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export function monitorAuthState(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function logoutUser() {
  await signOut(auth);
}
