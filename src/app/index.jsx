import { useEffect } from "react";
import { useRouter } from "expo-router";
import { auth } from "./global/initFireBase";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("./(tabs)/dashboard");
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
