import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import defaultStyles from "../../../config/styles";
import LogoMoovi from "../../../assets/svg/icon-moovi-logo.svg";
import CustomInput from "../../../components/CustomInput";
const HomeHeader = () => {
  const [Search, setSearch] = useState("");

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <LogoMoovi width="150" height="100" />
      </TouchableOpacity>
      <View style={styles.input}>
        <CustomInput
          style={styles.input1}
          placeholder="Search..."
          value={Search}
          setValue={setSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: defaultStyles.colors.header_home_color,
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: defaultStyles.colors.white,
    width: 230,
    height: 60,

    borderColor: defaultStyles.colors.borderColor,
    borderWidth: 1,
    borderRadius: 40,
    placeholderTextColor: defaultStyles.colors.white,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input1: {
    color: defaultStyles.colors.header_home_color,
    backgroundColor: defaultStyles.colors.white,
  },
});

export default HomeHeader;
