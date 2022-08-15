import * as types from "../types";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-community/async-storage";
import AppNavigation from "../../navigation/AppNavigation";
import { navigate } from "../../navigation/NavigationActions";
import * as Animatable from "react-native-animatable";
import { View, Text } from "react-native";
export const login = (email, password) => (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    // Firebase authentication actions

    auth()
      .signInWithEmailAndPassword(email, password)

      .then(() => {
        console.log("User signed ");
        dispatch({ type: types.LOGIN_SUCCESS });

        navigate("AppNavigation");
      })
      .catch((error) => {
        if (error.code === "auth/operation-not-allowed") {
          console.log("Enable anonymous in your firebase console.");
        }
        alert("User not signed ,error in email or password");

        console.error(error);
      });

    // Persist token in Async storage

    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("TASKS");
        if (value !== null) {
          // We have data!!
          console.log(value);
        }

        dispatch({
          type: "LOGIN",
          payload: token,
        });
      } catch (error) {
        // Error retrieving data
      }
    };
  } catch (error) {
    console.log("Error handling login action", error);
    dispatch({ type: types.LOGIN_FAILURE, loginError: error });
  }
};

export const register = (email, password) => (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_REQUEST });
    // Firebase register actions
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        dispatch({ type: types.REGSITER_SUCCESS });
        //Navigate to login page
        navigate("AppNavigation");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          alert("That email address is invalid!");
        }
        alert("colonne is empty!");
        console.error(error);
      });
  } catch (error) {
    console.log("Error handling login action", error);
    dispatch({ type: types.REGISTER_FAILURE, error });
  }
};
