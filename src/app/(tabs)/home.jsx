import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderBar from "../../components/header";

const homeScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-dark">
      <HeaderBar title="Home" />
      <Text className="text-blue px-4 py-2">Home Screen</Text>
    </ScrollView>
  );
};

export default homeScreen;
