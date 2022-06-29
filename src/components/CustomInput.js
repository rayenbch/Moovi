import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262a34",
    width: "100%",

    borderColor: "#393A40",
    borderWidth: 1,
    borderRadius: 20,
    placeholderTextColor: "white",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    color: "white",
  },
});
export default CustomInput;
