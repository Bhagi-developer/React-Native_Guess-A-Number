import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

import Styles from "../Constants/Styles";
import SpecialTitle from "./SpecialTitle";

function ConfirmMassage(props) {
  let content = "";

  if (props.isGameStarted) {
    return (
      <View style={{ ...styles.confirmMassage, ...Styles.card }}>
        <Text> The Number is :</Text>
        <SpecialTitle title={props.inputValue} />
        <Button
          color="#D823AB"
          style={styles.button}
          title="Start Game"
          onPress={() => {
            Alert.alert("Hey!", "Your Game Started!!!");
            props.onConfirm(props.inputValue);
          }}
        />
      </View>
    );
  }
  return <Text></Text>;
}

const styles = StyleSheet.create({
  confirmMassage: {
    marginVertical: 30,
    width: "60%",
  },
  button: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
});

export default ConfirmMassage;
