import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import HeaderBar from "../../components/header";

const Dashboard = () => {
  return (
    <ScrollView className="flex-1 bg-gray-dark">
      <HeaderBar title="Dashboard" />
    </ScrollView>
  );
};

export default Dashboard;
