import React from "react";
import { View, Text, StyleSheet } from "react-native";
import defaultStyles from "../../config/styles";

const Favorite = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Favorite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: defaultStyles.colors.black1,
    flex: 1,
  },
  textStyle: {
    backgroundColor: defaultStyles.colors.white,
  },
});

export default Favorite;
