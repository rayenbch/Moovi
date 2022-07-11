import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import defaultStyles from "../config/styles";

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

    borderColor: defaultStyles.colors.borderColor,
    borderWidth: 1,
    borderRadius: 20,
    placeholderTextColor: defaultStyles.colors.white,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    color: defaultStyles.colors.white,
  },
});
export default CustomInput;
