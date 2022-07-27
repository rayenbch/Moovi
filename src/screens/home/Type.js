import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const Type = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Find Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});

export default Type;
