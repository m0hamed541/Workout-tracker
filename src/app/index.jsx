import { Link } from "expo-router";

import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl"> Home page</Text>
      <Link href="(tabs)/home">go to home</Link>
    </View>
  );
}
