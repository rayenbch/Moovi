import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import defaultStyles from "../../../config/styles";

const RecommandedMoviesList = () => {
  return (
    <View style={styles.SectionHeader}>
      <Text style={styles.TextRecommanded}>Recommander</Text>
      <Text style={styles.TextList}>Voir tout</Text>
      <View style={styles.ContainerFilm}>
        <Text>Hello</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  SectionHeader: {
    alignItems: "center",
    flexDirection: "row",
  },

  TextRecommanded: {
    color: defaultStyles.colors.white,
    fontSize: 25,
  },
  TextList: {
    color: defaultStyles.colors.white,
    fontSize: 14,
    marginHorizontal: 150,
  },
  ContainerFilm: {
    backgroundColor: defaultStyles.colors.white,
    width: 25,
    height: 25,

    flex: 1,
  },

  styleFilmMarvel: {
    width: 80,
    height: 100,
  },
});

export default RecommandedMoviesList;
