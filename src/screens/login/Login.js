import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import img1 from "../../../assets/img/img1.png";
import CustomInput from "../../components/CustomInput";
import ButtonPrimery from "../../components/ButtonPrimery";
import defaultStyles from "../../../config/styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onForgotPaaswordPressed = () => {
    console.warn("onForgotPaaswordPressed");
  };

  const onSignUpPressed = () => {
    console.warn("onSignupPress");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.t1}>Welcome Back !</Text>
      <Text style={styles.t2}>Please sign in to your account</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <View style={styles.v1}>
        <TouchableOpacity>
          <Text style={styles.tex1} onPress={onForgotPaaswordPressed}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonPrimery text="Sign in" onPress={onSignInPressed} />

      <View style={styles.con2}>
        <TouchableOpacity>
          <Text style={styles.t3}>
            Don't have an account ?
            <Text style={styles.t4} onPress={onSignUpPressed}>
              Create one
            </Text>
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
    backgroundColor: "#181A20",
    flex: 1,
  },
  t1: {
    color: "white",
    fontSize: 40,
  },
  t2: {
    color: "white",
  },
  t3: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
  },
  con2: {
    alignItems: "center",
  },
  t4: {
    color: "#4D5EE3",
  },
  tex1: {
    color: "#4F5055",
    alignItems: "center",
    margin: 20,
  },
  v1: {
    width: "100%",
    alignItems: "flex-end",
  },
});
export default Login;
