import React from "react";
import { View, Text, StyleSheet } from "react-native";

import SpecialTitle from "./SpecialTitle";
import Colors from "../Constants/Colors";

function Header(props) {
  return (
    <View style={styles.Header}>
      <SpecialTitle title={props.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.bg,
    height: 150,
    width: "100%",
    alignContent:"center",
    justifyContent:"center"
  },
});

export default Header;
