import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { User } from "firebase/auth";
import { auth } from "./firebase";

// ===== Register =====
export const registerWithEmail = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await sendEmailVerification(userCredential.user);
  return userCredential.user;
};

// ===== Login =====
export const loginWithEmail = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  if (!userCredential.user.emailVerified) {
    throw new Error("Email chưa xác thực");
  }

  return userCredential.user;
};

// ===== Logout =====
export const logout = async () => {
  await signOut(auth);
};
const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async (): Promise<User> => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};
export const resetPassword = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};


export const saveUserToFirestore = async (user: any) => {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      name: user.displayName || "",
      avatar: user.photoURL || "",
      role: "user",
      createdAt: new Date(),
    });
  }
};