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
import IconSearch from "../../../assets/svg/icon-search.svg";
const HomeHeader = () => {
  const [Search, setSearch] = useState("");

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <LogoMoovi width="130" height="70" style={styles.logoMoovi} />
      </TouchableOpacity>
      <View style={styles.input}>
        <CustomInput
          style={styles.input1}
          placeholder="Search..."
          value={Search}
          setValue={setSearch}
        />
        <IconSearch height="30" width="20" style={styles.IconSearch} />
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logoMoovi: {
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: defaultStyles.colors.white,
    width: 230,
    height: 40,
    alignItems: "center",
    borderColor: defaultStyles.colors.borderColor,
    borderWidth: 1,
    borderRadius: 40,
    placeholderTextColor: defaultStyles.colors.header_home_color,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  input1: {
    color: defaultStyles.colors.header_home_color,
    backgroundColor: defaultStyles.colors.white,
  },
  IconSearch: {
    marginHorizontal: 110,
  },
});

export default HomeHeader;
