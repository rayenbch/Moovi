import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome5";

const Login = ({ title, addItem }) => {
  const [text, setText] = useState("");
  const onchange = (textValue) => setText(textValue);
  return (
    <View>
      <TextInput
        placeholder="add Item .."
        style={styles.input}
        onChangeText={onchange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 9,
    margin: 5,
  },
  btn: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Login.js;
