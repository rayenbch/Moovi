import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome5";
import defaultStyles from "../../../config/styles";
import CustomInput from "../../components/CustomInput";
const Home = () => {
  const [Search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <image
          style={styles.img1}
          source={require("C:Users\bchalOneDriveDocumentsprojetmooviassetsimgimg2.png")}
        />
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
});

export default Home;
