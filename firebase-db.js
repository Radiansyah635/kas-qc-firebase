import { getFirestore, doc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js';
import { app } from './firebase-auth.js';

const db = getFirestore(app);

export async function createUserProfile(userId, userData) {
  try {
    await setDoc(doc(db, "users", userId), {
      ...userData,
      createdAt: serverTimestamp(),
      role: 'qc'
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
