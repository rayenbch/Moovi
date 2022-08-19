import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import defaultStyles from "../../config/styles";

const FavorisHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.textHeader}>Mes Favoris</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: defaultStyles.colors.header_home_color,
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",

    paddingHorizontal: 20,
  },
  textHeader: {
    color: defaultStyles.colors.white,
  },
});

export default FavorisHeader;
