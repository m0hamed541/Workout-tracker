import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ExerciseTitle from "./ExerciseTitle";
import exercises from "../../test/dummydata";

const ExerciseBlock = ({ id }) => {
  const [sets, setSets] = useState([
    {
      id: 1,
      previous: "90lbs x 15",
      weight: "90",
      reps: "15",
      completed: true,
    },
    {
      id: 2,
      previous: "180lbs x 7",
      weight: "180",
      reps: "7",
      completed: true,
    },
    {
      id: 3,
      previous: "135lbs x 5",
      weight: "135",
      reps: "5",
      completed: true,
    },
  ]);

  const addSet = () => {
    setSets((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        previous: "",
        weight: "",
        reps: "",
        completed: false,
      },
    ]);
  };

  const renderSet = ({ item }) => (
    <View className="flex-row items-center mt-3">
      <Text className="w-8 text-center text-white">{item.id}</Text>
      <Text className="flex-1 text-white">{item.previous}</Text>
      <TextInput
        className="w-14 mx-1 border-b border-gray-500 text-center text-white"
        keyboardType="numeric"
        value={item.weight}
      />
      <TextInput
        className="w-14 mx-1 border-b border-gray-500 text-center text-white"
        keyboardType="numeric"
        value={item.reps}
      />
      <Icon
        name={item.completed ? "checkmark-circle" : "ellipse-outline"}
        size={20}
        color="#bbb"
      />
    </View>
  );

  const exercise = exercises[id]; // 👈 Lookup exercise by ID
  const title = exercise?.title || "Untitled Exercise"; // fallback title

  return (
    <View className="p-4">
      <ExerciseTitle title={title} />

      <FlatList
        data={sets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSet}
      />

      <TouchableOpacity className="mt-4 items-center" onPress={addSet}>
        <Text className="text-blue-400 text-base">+ Add Set</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseBlock;
