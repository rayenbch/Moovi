import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import { forwardRef } from "react";
import AppNavigation from "./AppNavigation";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./CustomTabBar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Favorite" component={Home} />
    </Tab.Navigator>
  );
};
const Navigation = (props, ref) => {
  return (
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Root"
      >
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Root" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default forwardRef(Navigation);
