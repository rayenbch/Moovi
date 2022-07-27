/*
 * Sample React Native App
 * https://github.com/facebook/react-native

 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import defaultStyles from "./src/config/styles";
import Providers from "./src/navigation";

import Navigation from "./src/navigation/Navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={defaultStyles.colors.header_home_color}
      />
      <Providers />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: defaultStyles.colors.header_home_color,
  },
});

export default App;
