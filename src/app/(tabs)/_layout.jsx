import { Alert, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../../constants/icons";
import FloatingButton from "../../components/floatingButton";
import addWorkout from "../global/addWorkout";

import { useRouter } from "expo-router";

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
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1C8EF7",
          tabBarInactiveTintColor: "#757575",
          tabBarStyle: {
            backgroundColor: "#080808",
            borderTopWidth: 0,
            elevation: 0,
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontFamily: "Poppins-Medium",
            fontSize: 12,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="exercices"
          options={{
            title: "Exercices",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.dumbell}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="routines"
          options={{
            title: "Routines",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.routine} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icons.progress} color={color} />
            ),
          }}
        />
      </Tabs>
      <FloatingButton
        onPress={() => router.push("../screens/WorkoutScreen")}
        icon={icons.add}
      />
    </SafeAreaView>
  );
};

export default TabsLayout;
