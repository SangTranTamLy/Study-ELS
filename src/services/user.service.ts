import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import type { User } from "firebase/auth";

export const saveUserToFirestore = async (user: User) => {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      uid: user.uid,
      email: user.email,
      name: user.displayName || "User",
      avatar: user.photoURL || "",
      role: "user",
      createdAt: serverTimestamp()
    });
  }
};
