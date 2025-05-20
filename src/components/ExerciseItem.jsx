import { View, Text, Image } from "react-native";
import React from "react";
import exercises from "../../test/dummydata";

const ExerciseCard = ({ id }) => {
  const exercise = exercises[id];
  return (
    <View>
      <Text>hello</Text>
    </View>
  );
};

export default ExerciseCard;
