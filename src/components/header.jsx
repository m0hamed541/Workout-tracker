import { View, Text } from "react-native";
import React from "react";

const HeaderBar = ({ title }) => {
  return (
    <View className="bg-gray-extradark py-4 px-4">
      <Text className="text-gray-light font-pmedium text-base">{title}</Text>
    </View>
  );
};

export default HeaderBar;
