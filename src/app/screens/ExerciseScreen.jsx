import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLocalSearchParams } from "expo-router";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../global/initFireBase";
import HeaderBar from "../../components/header";
import ExerciseItem from "../../components/ExerciseItem";

const ExerciseScreen = () => {
  const { id } = useLocalSearchParams();
  const exerciseId = id || "17xqPwbqcqOfej7MANDk";

  const [exercise, setExercise] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercise = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "exercises", exerciseId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setExercise({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("No exercise found with the given ID:", exerciseId);
          setExercise(null);
        }

        const historyQuery = query(
          collection(db, "workoutHistory"),
          where("exerciseId", "==", exerciseId)
        );
        const querySnapshot = await getDocs(historyQuery);
        const historyList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHistory(historyList);
      } catch (error) {
        console.error("Error fetching exercise or history:", error);
        setExercise(null);
        setHistory([]);
      } finally {
        setLoading(false);
      }
    };

    if (exerciseId) fetchExercise();
  }, [exerciseId]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-dark">
        <Text className="text-white">Loading...</Text>
      </View>
    );
  }

  if (!exercise) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-dark">
        <Text className="text-white">Exercise not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-gray-dark">
        <HeaderBar title={exercise.name} />
        <Image
          source={{ uri: exercise.imageUrl }}
          className="w-24 h-24 rounded-lg mr-4"
          resizeMode="contain"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExerciseScreen;
