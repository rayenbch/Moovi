import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";

import defaultStyles from "../config/styles";

const TabBarButton = ({ containerStyle, IconComponent, selected, onPress }) => {
  console.log("Selected", selected);
  return (
    <TouchableOpacity
      style={[styles.mainContainer, selected && styles.selectedStyle]}
      onPress={onPress}
    >
      {IconComponent && <IconComponent />}
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
    height: 40,
    width: 40,
    borderRadius: 50,
    // width: Dimensions.get("window").width * 0.09,
  },
  selectedStyle: {
    backgroundColor: defaultStyles.colors.red,
  },
  titleText: {
    color: defaultStyles.colors.white,
    fontSize: 12,
    fontWeight: defaultStyles.fonts.fontWeight,
    alignItems: "center",
  },
});
export default TabBarButton;
