import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderBar from "../../components/header";

const exercices = () => {
  return (
    <ScrollView className="flex-1 bg-gray-dark">
      <HeaderBar title="Exercices" />
      <Text className="text-blue px-4 py-2">Exercices</Text>
    </ScrollView>
  );
};

export default exercices;
