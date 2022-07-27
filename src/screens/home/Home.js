import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome5";

import HomeHeader from "./items/HomeHeader";
import CategoriesList from "./items/CategoriesList";
import defaultStyles from "../../config/styles";
import RecommandedMoviesList from "./items/RecommandedMoviesList";

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <CategoriesList />
      <RecommandedMoviesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black1,
    flex: 1,
  },
});

export default Home;
