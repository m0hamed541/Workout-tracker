import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../global/initFireBase";

const register = async (fullName, email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export default register;
