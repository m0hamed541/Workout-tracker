import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const ExerciseTitle = ({ title }) => {
  return (
    <View className="flex-row items-center justify-between">
      <Icon name="barbell" size={24} color="white" />
      <Text className="flex-1 ml-2 text-white font-bold text-base">
        {title}
      </Text>
      <Icon name="ellipsis-vertical" size={20} color="white" />
    </View>
  );
};

export default ExerciseTitle;
