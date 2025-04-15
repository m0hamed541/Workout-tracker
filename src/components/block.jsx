import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../../constants/styles";

const Block = ({ title }) => {
  return (
    <TouchableOpacity style={styles.blockConatiner}>
      <Text className="font-pregular text-white">{title}</Text>
      <Text className="text-gray-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
        facilisis arcu. Fusce eu laoreet est. Vivamus blandit ac nulla id
        suscipit.
      </Text>
    </TouchableOpacity>
  );
};

export default Block;
