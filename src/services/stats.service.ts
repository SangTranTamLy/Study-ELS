import { useEffect, useState } from "react";
import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  increment,
  arrayUnion,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

/* ── Types ───────────────────────────────────────────────── */
export interface Activity {
  id: string;
  dot: "indigo" | "green" | "amber" | "pink" | "cyan";
  text: string;
  time: string;          // ISO string
}

export interface UserStats {
  wordsLearned: number;
  quizzesCompleted: number;
  streak: number;
  accuracy: number;       // 0-100
  vocabularyPct: number;  // 0-100
  grammarPct: number;
  listeningPct: number;
  speakingPct: number;
  streakDays: boolean[];  // Mon–Sun (length 7)
  activities: Activity[];
  translationsCount: number;
  dictionaryLookups: number;
  updatedAt: Timestamp | null;
}

const defaultStats: UserStats = {
  wordsLearned: 0,
  quizzesCompleted: 0,
  streak: 0,
  accuracy: 0,
  vocabularyPct: 0,
  grammarPct: 0,
  listeningPct: 0,
  speakingPct: 0,
  streakDays: [false, false, false, false, false, false, false],
  activities: [],
  translationsCount: 0,
  dictionaryLookups: 0,
  updatedAt: null,
};

/* ── Init stats (called on first login) ──────────────────── */
export const initUserStats = async (uid: string) => {
  const ref = doc(db, "userStats", uid);
  // merge = true → won't overwrite if already exists
  await setDoc(ref, { ...defaultStats, updatedAt: serverTimestamp() }, { merge: true });
};

/* ── Realtime hook ───────────────────────────────────────── */
export const useUserStats = (uid: string | undefined) => {
  const [stats, setStats] = useState<UserStats>(defaultStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) {
      setLoading(false);
      return;
    }

    const ref = doc(db, "userStats", uid);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setStats({ ...defaultStats, ...snap.data() } as UserStats);
      } else {
        // First time → create default doc
        initUserStats(uid);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [uid]);

  return { stats, loading };
};

/* ── Helper: add activity ────────────────────────────────── */
export const addActivity = async (
  uid: string,
  dot: Activity["dot"],
  text: string
) => {
  const ref = doc(db, "userStats", uid);
  const entry: Activity = {
    id: Date.now().toString(),
    dot,
    text,
    time: new Date().toISOString(),
  };
  await updateDoc(ref, {
    activities: arrayUnion(entry),
    updatedAt: serverTimestamp(),
  });
};

/* ── Helper: increment a stat field ──────────────────────── */
export const incrementStat = async (
  uid: string,
  field: keyof Pick<UserStats, "wordsLearned" | "quizzesCompleted" | "translationsCount" | "dictionaryLookups">,
  amount = 1
) => {
  const ref = doc(db, "userStats", uid);
  await updateDoc(ref, {
    [field]: increment(amount),
    updatedAt: serverTimestamp(),
  });
};

/* ── Helper: update progress ─────────────────────────────── */
export const updateProgress = async (
  uid: string,
  field: keyof Pick<UserStats, "vocabularyPct" | "grammarPct" | "listeningPct" | "speakingPct" | "accuracy">,
  value: number
) => {
  const ref = doc(db, "userStats", uid);
  await updateDoc(ref, {
    [field]: value,
    updatedAt: serverTimestamp(),
  });
};

/* ── Helper: update streak ───────────────────────────────── */
export const updateStreak = async (
  uid: string,
  streak: number,
  streakDays: boolean[]
) => {
  const ref = doc(db, "userStats", uid);
  await updateDoc(ref, {
    streak,
    streakDays,
    updatedAt: serverTimestamp(),
  });
};
