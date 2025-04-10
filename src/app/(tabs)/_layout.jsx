import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../../constants/icons";

const TabIcon = ({ icon, color }) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
    />
  );
};

const TabsLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs screenOptions={{ tabBarActiveTintColor: "green" }}>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: () => <TabIcon icon={icons.home} />,
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            headerShown: false,
            tabBarIcon: () => <TabIcon icon={icons.progress} />,
          }}
        />
        <Tabs.Screen
          name="routines"
          options={{
            headerShown: false,
            tabBarIcon: () => <TabIcon icon={icons.routine} />,
          }}
        />
        <Tabs.Screen
          name="exercices"
          options={{
            headerShown: false,
            tabBarIcon: () => <TabIcon icon={icons.dumbell} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
