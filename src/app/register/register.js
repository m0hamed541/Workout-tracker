import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";

import firebaseApp from "../global/initFireBase";

const auth = getAuth(firebaseApp);
