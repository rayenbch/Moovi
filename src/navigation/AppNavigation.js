import React from "react";
import { View, Text } from "react-native";

import Home from "../screens/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./CustomTabBar";
import { forwardRef } from "react";
import defaultStyles from "../config/styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Home />
    </View>
  );
}

function Favorite() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>favorie</Text>
    </View>
  );
}

const AppNavigation = (props, ref) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="home" component={HomeScreen} />

        <Tab.Screen name="favorie" component={Favorite} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default forwardRef(AppNavigation);
