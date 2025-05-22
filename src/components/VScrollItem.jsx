import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const VScrollItem = ({ text, image, onClick }) => {
  return (
    <View className="mr-4">
      <TouchableOpacity 
        className="items-center"
        onPress={onClick}
      >
        <View className="bg-gray-extradark rounded-xl p-2 mb-2">
          <Image 
            source={image} 
            className="w-20 h-20"
            resizeMode="contain"
          />
        </View>
        <Text className="text-white font-pmedium capitalize">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VScrollItem; 