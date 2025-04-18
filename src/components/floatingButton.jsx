import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => onPress()}
      activeOpacity={0.7}
    >
      <Image
        source={icons.add}
        className={`w-5 h-5 tint-white`}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 90,
    right: 30,
    backgroundColor: "#1C8EF7",
    width: 50,
    height: 50,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "white",
  },
});

export default FloatingButton;
