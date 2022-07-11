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

import CustomInput from "../../components/CustomInput";
import ButtonPrimery from "../../components/ButtonPrimery";
import defaultStyles from "../../config/styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("Sign in");

    navigation.navigate("Home");
  };

  const onForgotPaaswordPressed = () => {
    console.warn("onForgotPaaswordPressed");
  };

  const onSignUpPressed = () => {
    console.warn("onSignupPress");

    navigation.navigate("SignUpScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.text1}>Welcome Back !</Text>
        <Text style={styles.text2}>Please sign in to your account</Text>
      </View>
      <View style={styles.container0}>
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
      </View>
      <View style={styles.vpassword}>
        <TouchableOpacity>
          <Text style={styles.password} onPress={onForgotPaaswordPressed}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <ButtonPrimery text="Sign in" onPress={onSignInPressed} />

      <View style={styles.container1}>
        <TouchableOpacity>
          <Text style={styles.text3}>
            Don't have an account ?
            <Text style={styles.signUp} onPress={onSignUpPressed}>
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
    backgroundColor: defaultStyles.colors.black,
    flex: 1,
  },
  text1: {
    color: defaultStyles.colors.white,
    fontSize: 30,
  },
  text2: {
    color: defaultStyles.colors.white,
  },
  Header: {
    flex: 0.3,
  },
  text3: {
    color: defaultStyles.colors.white,
    fontSize: 14,
  },
  container1: {
    alignItems: "center",
  },
  signUp: {
    color: defaultStyles.colors.blue,
  },
  password: {
    color: defaultStyles.colors.col_of_cust_input,
    alignItems: "center",
  },
  vpassword: {
    width: "100%",
    alignItems: "flex-end",
  },
  container0: {
    flex: 0.3,
    width: "100%",
  },
});
export default Login;
