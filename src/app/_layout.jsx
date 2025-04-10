import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

const RootLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default RootLayout;
