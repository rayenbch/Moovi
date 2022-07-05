import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome5";

const Home = ({ title, addItem }) => {
  return (
    <View>
      <Text>Hi </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 9,
    margin: 5,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Home;
