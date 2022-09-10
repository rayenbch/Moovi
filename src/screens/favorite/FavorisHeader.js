import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
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
    flex: 0.1,
    alignItems: "center",
    paddingTop: 40,
  },
  textHeader: {
    color: defaultStyles.colors.white,
    fontSize: 25,
    alignContent: "center",
    alignItems: "center",
  },
});

export default FavorisHeader;
