import React from "react";
import { View, Text, ScrollView } from "react-native";
import HeaderBar from "../../components/header";

const dashboard = () => {
  return (
    <ScrollView className="flex-1 bg-gray-dark">
      <HeaderBar title="Dashboard" />
      <Text className="text-blue px-4 py-2">Dashboard</Text>
    </ScrollView>
  );
};

export default dashboard;
