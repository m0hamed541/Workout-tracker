import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderBar from "../../components/header";

const routines = () => {
  return (
    <ScrollView className="flex-1 bg-gray-dark">
      <HeaderBar title="Routines" />
      <Text className="text-blue px-4 py-2">Routines</Text>
    </ScrollView>
  );
};

export default routines;
