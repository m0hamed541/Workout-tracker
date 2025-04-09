import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl"> Home page</Text>
      <StatusBar style="auto" />
    </View>
  );
}
