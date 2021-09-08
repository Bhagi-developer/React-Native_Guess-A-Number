import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

import Styles from "../Constants/Styles";
import SpecialTitle from "../Components/SpecialTitle";
import Colors from "../Constants/Colors";

function randomNumberGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let rNumber = Math.floor(Math.random() * (max - min) + min);
  return rNumber;
}

function GameScreen(props) {
  const [compGuess, SetcompGuess] = useState(randomNumberGenerator(1, 100));

  const curHigh = useRef(100);
  const curLow = useRef(1);

  const [rounds, setrounds] = useState(0);

  // const { input, onGameOver } = props;

  useEffect(() => {
    if (compGuess === props.input) {
      onGameOver(rounds);
    }
  }, [compGuess, props.input, props.onGameOver]);

  function handleGuess(direction) {
    if (
      (direction === "lower" && compGuess < props.input) ||
      (direction === "higher" && compGuess > props.input)
    ) {
      Alert.alert("Hey!", "You are doing a cheat! Don't lie please!!!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      curHigh.current = compGuess;

      setrounds(rounds + 1);
    } else if (direction === "higher") {
      curLow.current = compGuess;

      setrounds(rounds + 1);
    } else if (direction === "same") {
      props.onGameOver(rounds);

      return;
    }

    const nextGuess = randomNumberGenerator(curLow.current, curHigh.current);
    SetcompGuess(nextGuess);

    if (compGuess == props.input) {
    }
  }

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Computer's Guess is:</Text>
      </View>
      <SpecialTitle title={compGuess} />
      <View style={{ ...Styles.card, ...styles.buttonContainer }}>
        <Button
          title="Lower"
          onPress={() => {
            handleGuess("lower");
          }}
        />
        <Button
          title="Higher"
          onPress={() => {
            handleGuess("higher");
          }}
        />
      </View>
      <Button
        title="same"
        onPress={() => {
          handleGuess("same");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    alignContent: "center",
    padding: 30,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    color: Colors.specialTxt,
  },
});

export default GameScreen;
