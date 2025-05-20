import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderBar from "../../components/header";

const exercises = () => {
  return (
    <ScrollView className="flex-1 bg-gray-dark">
      <HeaderBar title="Exercises" />
      <Text className="text-blue px-4 py-2">Exercises</Text>
    </ScrollView>
  );
};

export default exercises;
