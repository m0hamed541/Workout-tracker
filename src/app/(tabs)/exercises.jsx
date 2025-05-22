import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import HeaderBar from "../../components/header";
import VScrollItem from "../../components/VScrollItem";
import ExerciseCard from "../../components/ExerciseCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../global/initFireBase";

const muscleGroups = ["biceps", "chest", "forearms", "quads"];
const imageMap = {
  biceps: require("../../../assets/images/exercises/biceps/biceps.png"),
  chest: require("../../../assets/images/exercises/chest/chest.png"),
  forearms: require("../../../assets/images/exercises/forearms/forearms.png"),
  quads: require("../../../assets/images/exercises/quads/quads.png"),
};

const Exercises = () => {
  const [selectedGroup, setSelectedGroup] = useState("chest");
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExercises();
  }, [selectedGroup]);

  const fetchExercises = async () => {
    try {
      setLoading(true);
      const muscleGroupRef = `/muscleGroup/${selectedGroup}`;
      const exercisesRef = collection(db, "exercises");
      console.log(exercisesRef);

      const querySnapshot = await getDocs(exercisesRef);
      const exercisesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched exercises:", exercisesList);
      setExercises(exercisesList);
      setError(null);
    } catch (err) {
      console.error("Error fetching exercises:", err);
      setError("Failed to load exercises");
    } finally {
      setLoading(false);
    }
  };

  const handleMuscleGroupSelect = (group) => {
    setSelectedGroup(group);
  };
  const filteredExercises = exercises.filter(
    (ex) => ex.primaryMuscleGroup === selectedGroup
  );
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
            {muscleGroups.map((group, i) => (
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
            <Text className="text-gray-light font-pregular mb-4">
              Select exercises for your {selectedGroup} workout
            </Text>

            {loading ? (
              <View className="items-center justify-center py-8">
                <ActivityIndicator size="large" color="#3B82F6" />
              </View>
            ) : error ? (
              <View className="items-center justify-center py-8">
                <Text className="text-red-500 font-pmedium mb-2">{error}</Text>
                <TouchableOpacity
                  className="bg-blue-DEFAULT px-4 py-2 rounded-lg"
                  onPress={fetchExercises}
                >
                  <Text className="text-white font-pmedium">Retry</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                {filteredExercises.length > 0 ? (
                  filteredExercises.map((ex) => (
                    <ExerciseCard
                      key={ex.id}
                      name={ex.name}
                      muscleGroup={
                        selectedGroup.charAt(0).toUpperCase() +
                        selectedGroup.slice(1)
                      }
                      image={ex.imageUrl}
                    />
                  ))
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 20,
                      color: "gray",
                      fontSize: 16,
                    }}
                  >
                    No exercises found for {selectedGroup}.
                  </Text>
                )}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Exercises;
