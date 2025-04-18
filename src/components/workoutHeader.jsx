import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const workoutHeader = () => {
  return (
    <View className="flex-row items-center justify-between p-4 border-b border-gray-light/20">
      <View className="flex-row items-center gap-2">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#757575" />
        </TouchableOpacity>
        <Text className="text-white font-pmedium text-lg">Log Workout</Text>
      </View>
      <TouchableOpacity>
        <Text className="text-blue-DEFAULT font-pmedium">Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default workoutHeader;
