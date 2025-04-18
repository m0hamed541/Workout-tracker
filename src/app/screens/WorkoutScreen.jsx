import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import HeaderBar from "../../components/header";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get("window").height;

const WorkoutScreen = () => {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-gray-dark"
      contentContainerStyle={{ minHeight: screenHeight }}
    >
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <HeaderBar title="Workout" />

      <View className="flex-row justify-between px-6 py-4">
        <View>
          <Text className="text-gray-light text-sm font-pregular">
            Duration
          </Text>
          <Text className="text-blue-DEFAULT text-lg font-pmedium">
            23 mins
          </Text>
        </View>
        <View>
          <Text className="text-gray-light text-sm font-pregular">Volume</Text>
          <Text className="text-white text-lg font-pmedium">0 lbs</Text>
        </View>
        <View>
          <Text className="text-gray-light text-sm font-pregular">Sets</Text>
          <Text className="text-white text-lg font-pmedium">0</Text>
        </View>
      </View>

      {/* Empty State */}
      <View className="flex-1 items-center justify-center px-4">
        <View className="items-center gap-4">
          <Ionicons name="barbell-outline" size={48} color="#757575" />
          <Text className="text-white text-xl font-pmedium">Get started</Text>
          <Text className="text-gray-light text-center font-pregular">
            Add an exercise to start your workout
          </Text>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View className="p-4 gap-4">
        <TouchableOpacity className="bg-blue-DEFAULT rounded-lg py-3 items-center">
          <Text className="text-white font-pmedium text-base">
            Add Exercise
          </Text>
        </TouchableOpacity>

        <View className="flex-row gap-4">
          <TouchableOpacity className="flex-1 bg-gray-extradark rounded-lg py-3 items-center">
            <Text className="text-white font-pmedium">Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-gray-extradark rounded-lg py-3 items-center">
            <Text className="text-red-500 font-pmedium">Discard Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default WorkoutScreen;
