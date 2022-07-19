import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import LogAction from "../../../assets/svg/icon-category-action.svg";
import LogAnimation from "../../../assets/svg/icon-category-animation.svg";
import LogAventure from "../../../assets/svg/icon-category-aventure.svg";
import LogDrama from "../../../assets/svg/icon-category-drama.svg";
import LogFamily from "../../../assets/svg/icon-category-family.svg";
import CategoriesButton from "./CategoriesButton";

const CategoriesList = ({}) => {
  return (
    <View style={styles.category} resizeMode="contain">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CategoriesButton
          title="Action"
          containerStyle={{ paddingLeft: 10, paddingRight: 10 }}
          IconComponent={() => <LogAction />}
        />
        <CategoriesButton
          title="Famille"
          containerStyle={{ paddingRight: 10 }}
          IconComponent={() => <LogFamily />}
        />
        <CategoriesButton
          title="Drama"
          containerStyle={{ paddingRight: 10 }}
          IconComponent={() => <LogDrama />}
        />
        <CategoriesButton
          title="Animation"
          containerStyle={{ paddingRight: 10 }}
          IconComponent={() => <LogAnimation />}
        />
        <CategoriesButton
          title="Aventure"
          containerStyle={{ paddingRight: 30 }}
          IconComponent={() => <LogAventure />}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  category: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
  },
});

export default CategoriesList;
