import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from "react-native";

import SpecialTitle from "../Components/SpecialTitle";
import Styles from "../Constants/Styles";
import ConfirmMassage from "../Components/ConfirmMassage";

function StartGame(props) {
  const [inputValue, setinputValue] = useState("");
  const [isGameStarted, setisGameStarted] = useState(false);

  function handleInput(enteredValue) {
    setinputValue(enteredValue.replace(/[^0-9]/g, ""));
  }

  function handleReset() {
    setinputValue("");
    setisGameStarted(false);
    Alert.alert("Reset", "You Wiped Input Value!");
  }

  function handleConfirm() {
    Keyboard.dismiss();
    if (isNaN(inputValue) || inputValue <= 0) {
      Alert.alert(
        "Invalid number!",
        "The number has to be a number between 1 to 99!!",
        [{ text: "okay", style: "destructive", onpress: handleReset }]
      );
      return;
    }

    setisGameStarted(true);
  }

  return (
    <View style={{ ...styles.inputCard, ...Styles.card }}>
      <SpecialTitle title="Choose a Number!" />
      <TextInput
        style={Styles.input}
        keyboardType="number-pad"
        maxLength={2}
        onChangeText={handleInput}
        value={inputValue}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Reset"
            style={styles.button}
            onPress={() => {
              handleReset();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button title="Confirm" onPress={handleConfirm} />
        </View>
      </View>

      <ConfirmMassage
        isGameStarted={isGameStarted}
        inputValue={inputValue}
        onConfirm={props.onConfirm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
  },
  inputCard: {
    width: "80%",
    marginTop: 40,
    padding: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default StartGame;
