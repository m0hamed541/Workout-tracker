import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const EmptyState = () => {
  return (
    <View className="flex-1 items-center justify-center px-4">
      <View className="items-center gap-4">
        <Ionicons name="barbell-outline" size={48} color="#757575" />
        <Text className="text-white text-xl font-pmedium">Get started</Text>
        <Text className="text-gray-light text-center font-pregular">
          Add an exercise to start your workout
        </Text>
      </View>
    </View>
  );
};

export default EmptyState;
