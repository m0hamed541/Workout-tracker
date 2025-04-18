import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderBar from "../../components/header";
import Block from "../../components/block";

const homeScreen = () => {
  const blockData = [
    { title: "Daily Steps", value: "3691/10000" },
    { title: "Days working out", value: "12/22" },
    { title: "Calories Burnt", value: "9151500" },
    { title: "Your week:", value: "36% completed" },
    { title: "Daily Steps", value: "3691/10000" },
    { title: "Days working out", value: "12/22" },
    { title: "Your week:", value: "36% completed" },
    { title: "Latest workout:", value: "2 sets Triceps Rope Pushdown" },
  ];

  return (
    <>
      <HeaderBar title="Home" />
      <ScrollView className="flex-1 bg-gray-dark">
        {/* Greeting section */}
        <View className="px-4 py-4">
          <Text className="text-white text-xl font-bold">Good Evening,</Text>
          <Text className="text-gray-400 text-lg">Welcome Mohamed!</Text>
        </View>

        {/* Blocks grid */}
        <View className="">
          {blockData.map((block, index) => (
            <Block
              key={index}
              title={block.title}
              value={block.value}
              percentage={block.percentage}
              showPercentage={block.percentage !== undefined}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default homeScreen;
