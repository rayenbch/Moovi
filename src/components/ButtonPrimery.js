import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import defaultStyles from "../config/styles";

const ButtonPrimery = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: defaultStyles.colors.blue,
    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 20,
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },
});

export default ButtonPrimery;
