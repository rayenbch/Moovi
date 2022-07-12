import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome5";
import defaultStyles from "../../config/styles";
import CustomInput from "../../components/CustomInput";
import Logo1 from "../../assets/svg/icon-moovi-logo.svg";
import LogAction from "../../assets/svg/icon-category-action.svg";
import LogAnimation from "../../assets/svg/icon-category-animation.svg";
import LogAventure from "../../assets/svg/icon-category-aventure.svg";
import LogDrama from "../../assets/svg/icon-category-drama.svg";
import LogFamily from "../../assets/svg/icon-category-family.svg";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [Search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo1 width="150" height="100" />
        <View style={styles.input}>
          <CustomInput
            style={styles.input1}
            placeholder="Search..."
            value={Search}
            setValue={setSearch}
          />
        </View>
      </View>

      <View style={styles.category} resizeMode="contain">
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <LogAction height={70} width={70} />
          </View>
          <View style={styles.titleAction}>
            <Text>action</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <LogFamily height={70} width={70} borderRadius={50} />
          </View>
          <View style={styles.titleAction}>
            <Text>Famille</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <LogDrama height={70} width={70} />
          </View>
          <View style={styles.titleAction}>
            <Text>Drama</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <LogAnimation height={70} width={70} />
          </View>
          <View style={styles.titleAction}>
            <Text>Animation</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <LogAventure height={70} width={70} />
          </View>
          <View style={styles.titleAction}>
            <Text>Aventure</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.black1,
    flex: 1,
  },
  header: {
    backgroundColor: defaultStyles.colors.header_home_color,
    flex: 0.1,
    flexDirection: "row",
  },
  input: {
    backgroundColor: defaultStyles.colors.white,
    width: 230,
    length: 30,

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
  category: {
    flex: 0.2,
    width: "100%",
    flexDirection: "row",
  },
  itemContainer: {
    backgroundColor: defaultStyles.colors.red,
    width: 80,
    length: 80,
    borderRadius: 80,
    alignItems: "center",
  },

  titleAction: { color: defaultStyles.colors.white },
});

export default Home;
