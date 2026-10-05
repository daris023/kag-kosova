import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 1) Shko te https://console.firebase.google.com
// 2) Krijo nje projekt te ri (falas, plani "Spark")
// 3) Project settings -> General -> "Your apps" -> shto nje "Web app" (</>)
// 4) Kopjo config-un qe te jep Firebase dhe ngjite KETU poshte, ne vend te vlerave placeholder:
const firebaseConfig = {
  apiKey: "VENDOS_API_KEY_KETU",
  authDomain: "VENDOS_PROJECT_ID.firebaseapp.com",
  projectId: "VENDOS_PROJECT_ID",
  storageBucket: "VENDOS_PROJECT_ID.appspot.com",
  messagingSenderId: "VENDOS_SENDER_ID",
  appId: "VENDOS_APP_ID",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Vetem email-et ne kete liste mund te hyjne ne panelin e adminit,
// edhe nese dikush tjeter kycet me nje llogari Google valide.
export const ADMIN_EMAILS = ["daris.shala19@gmail.com"];
