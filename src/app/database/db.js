import { getFirestore } from "firebase/firestore";
import app from "../global/initFireBase";

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
