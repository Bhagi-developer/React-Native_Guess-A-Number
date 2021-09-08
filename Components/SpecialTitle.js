import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../Constants/Colors";

function SpecialTitle(props) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
   alignItems:"center"
  },
  title: {
    color: "black",
    fontSize: 20,
    fontFamily: "sans-serif",
    color: Colors.text,
  },
});

export default SpecialTitle;
