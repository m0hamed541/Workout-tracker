import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBW9D5DcVDgYPXatFfMCfDvtNkDD2dRbqM",
  project_id: "workout-tracking-app-project",
  storageBucket: "workout-tracking-app-project.firebasestorage.app",
};

const app = initializeApp(firebaseConfig);
let auth;
try {
  auth = getAuth(app);
} catch (e) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export { auth };
export default app;
