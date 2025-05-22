import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderBar from "../../components/header";
import VScrollItem from "../../components/VScrollItem";

const muscleGrps = ["biceps", "chest", "forearms", "quads"];
const imageMap = {
  biceps: require("../../../assets/images/exercises/biceps/biceps.png"),
  chest: require("../../../assets/images/exercises/chest/chest.png"),
  forearms: require("../../../assets/images/exercises/forearms/forearms.png"),
  quads: require("../../../assets/images/exercises/quads/quads.png"),
};

const exercises = () => {
  const [selectedGroup, setSelectedGroup] = useState("chest");

  const handleMuscleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <>
      <HeaderBar title="Exercises" />
      <ScrollView className="flex-1 bg-gray-dark">
        <View className="px-4 py-2">
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="flex-row"
          >
            {muscleGrps.map((group, i) => (
              <VScrollItem
                key={i}
                text={group}
                image={imageMap[group]}
                onClick={() => handleMuscleGroupSelect(group)}
              />
            ))}
          </ScrollView>

          <View className="mt-6">
            <Text className="text-white text-xl font-pbold mb-2">
              {selectedGroup.charAt(0).toUpperCase() + selectedGroup.slice(1)}{" "}
              Exercises
            </Text>
            <Text className="text-gray-light font-pregular">
              Select exercises for your {selectedGroup} workout
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default exercises;
