import React from "react";
import { View, StyleSheet } from "react-native";
import IconHome from "../assets/svg/icon-home.svg";
import IconHomeFilled from "../assets/svg/icon-home-on.svg";
import IconHeartOutline from "../assets/svg/icon-heart.svg";
import IconHeartFilled from "../assets/svg/icon-heart-on.svg";
import TabBarButton from "./TabBarButton";
import defaultStyles from "../config/styles";
import Favorite from "../screens/favorite/Favorite";

const CustomTabBar = ({ state, navigation }) => {
  console.log("State", state.index);
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.btnContainer}>
        <TabBarButton
          IconComponent={() =>
            state.index === 0 ? <IconHomeFilled /> : <IconHome />
          }
          selected={state.index === 0}
          onPress={() => navigation.navigate("home")}
        />
      </View>
      <View style={styles.btnContainer}>
        <TabBarButton
          IconComponent={() =>
            state.index === 1 ? <IconHeartFilled /> : <IconHeartOutline />
          }
          selected={state.index === 1}
          onPress={() => navigation.navigate("favorite")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: defaultStyles.colors.header_home_color,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: 90,
    height: 70,
    paddingVertical: 10,
  },
  btnContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CustomTabBar;
