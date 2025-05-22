import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ExerciseCard = ({ name, muscleGroup, image, onPress }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center bg-gray-extradark rounded-xl px-3 py-2 mb-2"
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View className="w-12 h-12 rounded-full bg-gray-dark justify-center items-center overflow-hidden mr-3">
        {image ? (
          typeof image === "string" ? (
            <Image
              source={{ uri: image }}
              className="w-12 h-12"
              resizeMode="contain"
            />
          ) : (
            <Image source={image} className="w-12 h-12" resizeMode="contain" />
          )
        ) : (
          <Feather name="image" size={28} color="#888" />
        )}
      </View>
      <View className="flex-1">
        <Text className="text-white text-base font-pmedium" numberOfLines={1}>
          {name}
        </Text>
        <Text
          className="text-gray-light text-sm font-pregular mt-0.5"
          numberOfLines={1}
        >
          {muscleGroup}
        </Text>
      </View>
      <Feather name="chevron-right" size={22} color="#fff" />
    </TouchableOpacity>
  );
};

export default ExerciseCard;
