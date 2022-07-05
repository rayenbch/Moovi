import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import CustomInput from "../../components/CustomInput";
import ButtonPrimery from "../../components/ButtonPrimery";
import Login from "../login/Login";
import defaultStyles from "../../../config/styles";
const ConfirmEmailScreen = () => {
  const onSignUpPressed = () => {
    console.warn("onSignUpPressed");
  };
  const SignInPressed = () => {
    console.warn("signInPressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.t1}>Create an account</Text>
      <Text style={styles.t2}>Please sign in to your account</Text>
      <CustomInput
        placeholder="Full Name"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Email Address"
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        placeholder="Phone Number"
        value={number}
        setValue={setNumber}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
      />

      <ButtonPrimery text="Sign Up" onPress={onSignUpPressed} />
      <View style={styles.con2}>
        <TouchableOpacity onPress={SignInPressed}>
          <Text style={styles.t1}>
            have an account?
            <Text style={styles.t3}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
  },
  t1: {
    color: defaultStyles.colors.white,
    fontSize: 14,
    fontWeight: defaultStyles.fonts.fontWeight,
    margin: 10,
  },
  t2: {
    color: defaultStyles.colors.col_input,
  },
  text1: {
    color: defaultStyles.colors.white,
    alignItems: "center",
    fontWeight: defaultStyles.colors.white,
    margin: 10,
  },
  t3: {
    color: defaultStyles.colors.blue,
  },
  con1: {},
  con2: {
    alignItems: "center",
  },
});
export default ConfirmEmailScreen;
