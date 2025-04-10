import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Stack, Tabs } from "expo-router";

const TabsLayout = () => {
  return <Tabs screenOptions={{ tabBarActiveTintColor: "green" }} />;
};

export default TabsLayout;
