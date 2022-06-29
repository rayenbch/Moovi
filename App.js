/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Home from "./src/screens/home/Home";
import Login from "./src/screens/login/Login";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "dark-white",
  },
});

export default App;
