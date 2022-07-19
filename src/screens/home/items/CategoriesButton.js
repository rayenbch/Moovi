import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

import defaultStyles from "../../../config/styles";

const CategoriesButton = ({ title, containerStyle, IconComponent }) => {
  return (
    <TouchableOpacity
      style={[styles.mainContainerWrapper, containerStyle]}
      onPress={() => {}}
    >
      <View style={styles.mainContainer}>
        {IconComponent && <IconComponent />}
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainerWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,

    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.17,
    height: Dimensions.get("window").width * 0.17,
    backgroundColor: defaultStyles.colors.red,
    justifyContent: "center",
    alignItems: "center",
  },

  titleText: {
    color: defaultStyles.colors.white,
    fontSize: 12,
    fontWeight: defaultStyles.fonts.fontWeight,
    alignItems: "center",
  },
});
export default CategoriesButton;
