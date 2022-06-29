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
const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [number, setNumber] = useState("");

  const onSignUpPressed = () => {
    console.warm("onSignUpPressed");
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
        <Text style={styles.t1}>
          have an account?
          <Text style={styles.t3}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#181A20",
    flex: 1,
  },
  t1: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
  },
  t2: {
    color: "#393A40",
  },
  text1: {
    color: "white",
    alignItems: "center",
    fontWeight: "bold",
    margin: 10,
  },
  t3: {
    color: "#4D5EE3",
  },
  con1: {},
  con2: {
    alignItems: "center",
  },
});
export default SignUpScreen;
