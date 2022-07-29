import React, { useContext, useState } from "react";
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
import defaultStyles from "../../config/styles";
import { register } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const dispatch = useDispatch();

  const onSignUpPressed = () => {
    console.warn("onSignUpPressed");

    dispatch(register(username, email, password));
  };
  const SignInPressed = () => {
    console.warn("signInPressed");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.t1}>Create an account</Text>
        <Text style={styles.t2}>Please sign in to your account</Text>
      </View>
      <View style={styles.input}>
        <View style={styles.input1}>
          <CustomInput
            placeholder="Full Name"
            value={username}
            setValue={setUsername}
          />
        </View>
        <View style={styles.input1}>
          <CustomInput
            placeholder="Email Address"
            value={email}
            setValue={setEmail}
          />
        </View>

        <View style={styles.input1}>
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.input1}>
          <CustomInput
            placeholder="Repeat Password"
            value={passwordRepeat}
            setValue={setPasswordRepeat}
            secureTextEntry
          />
        </View>
      </View>

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
  input: {
    flex: 0.6,
    width: "100%",
    backgroundColor: "#262a34",

    borderColor: defaultStyles.colors.borderColor,
    borderWidth: 1,
    borderRadius: 20,
    placeholderTextColor: defaultStyles.colors.white,
    paddingHorizontal: 10,
    marginVertical: 10,
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
  input1: {
    flex: 0.2,
  },

  con2: {
    alignItems: "center",
  },
});
export default SignUpScreen;
