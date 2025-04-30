import { useEffect } from "react";
import { useRouter } from "expo-router";
import { firebaseApp } from "./global/initFireBase";
export default function Index() {
  firebaseApp;
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("./screens/auth_screens/login");
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
