import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBW9D5DcVDgYPXatFfMCfDvtNkDD2dRbqM",
  project_id: "workout-tracking-app-project",
  storageBucket: "workout-tracking-app-project.firebasestorage.app",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
