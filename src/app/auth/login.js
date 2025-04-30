import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../global/initFireBase";

const login = async (email, password) => {
  const credentials = await signInWithEmailAndPassword(auth, email, password);
  return credentials;
};

export default login;
