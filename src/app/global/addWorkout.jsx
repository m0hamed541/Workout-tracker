import { Alert } from "react-native";

const addWorkout = () => {
  Alert.alert("Add Exercise", "What would you like to add?", [
    {
      text: "New Exercise",
      onPress: () => console.log("New Exercise pressed"),
    },
    {
      text: "New Routine",
      onPress: () => console.log("New Routine pressed"),
    },
    {
      text: "Cancel",
      style: "cancel",
    },
  ]);
};

export default addWorkout;
