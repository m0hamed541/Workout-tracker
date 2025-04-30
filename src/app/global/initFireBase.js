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
let auth;
const app = initializeApp(firebaseConfig);
try {
  auth = getAuth(app);
} catch (e) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}
export default app;
export { auth };