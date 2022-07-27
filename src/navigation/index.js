import React from "react";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import { AuthProvider } from "./AuthProvider";
import Routes from "./Routes";

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;
