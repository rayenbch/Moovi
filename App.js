/*
 * Sample React Native App
 * https://github.com/facebook/react-native

 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import defaultStyles from "./src/config/styles";
import { configStore } from "./src/store/configStore";
import { Provider } from "react-redux";
import Navigation from "./src/navigation/Navigation";
import { navigationRef } from "./src/navigation/NavigationActions";

const App = () => {
  return (
    <Provider store={configStore}>
      <SafeAreaView style={styles.root}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={defaultStyles.colors.header_home_color}
        />
        <Navigation ref={navigationRef} />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: defaultStyles.colors.header_home_color,
  },
});

export default App;
