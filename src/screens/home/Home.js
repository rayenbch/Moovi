import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome5";
import defaultStyles from "../../config/styles";
import CustomInput from "../../components/CustomInput";
import Logo1 from "../../assets/svg/icon-moovi-logo.svg";
import LogAction from "../../assets/svg/icon-category-action.svg";
import LogAnimation from "../../assets/svg/icon-animation.svg";
import LogAventure from "../../assets/svg/icon-aventure.svg";
import LogDrama from "../../assets/svg/icon-drama.svg";
import LogFamily from "../../assets/svg/icon-family.svg";
import { Header } from "react-native/Libraries/NewAppScreen";
const Home = () => {
  const [Search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <Header>
        <View style={styles.header}>
          <Logo1 width="20" height="10" />

          <CustomInput
            style={styles.input1}
            placeholder="Search..."
            value={Search}
            setValue={setSearch}
          />
        </View>
      </Header>
      <View style={styles.category}>
        <LogAction />
        <LogAnimation />
        <LogAventure />
        <LogFamily />
        <LogDrama />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black1,
    flex: 1,
  },
  header: {
    backgroundColor: defaultStyles.colors.header_home_color,
    flex: 0.2,
  },
  input1: {
    color: defaultStyles.colors.white,
  },
  category: {
    flex: 0.2,
    color: defaultStyles.colors.red,
  },
});

export default Home;
