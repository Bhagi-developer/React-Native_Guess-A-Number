import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "./Components/Header";
import StartGame from "./Screens/StartGame";
import GameScreen from "./Screens/GameScreen";
import GameOver from "./Screens/GameOver";

export default function App() {
  const [enteredValue, setenteredValue] = useState();
  const [guessRounds, setguessRounds] = useState(0);

  function handleGameStart(){
        setguessRounds(0);
        setenteredValue(null);
  }

  function handleScreen(inputValue) {
    setenteredValue(inputValue);
  }

  function handleGameOver(noOfRounds) {
    setguessRounds(noOfRounds);
  }

  let content = <StartGame onConfirm={handleScreen} />;

  if (enteredValue && guessRounds <= 0) {
    content = <GameScreen input={enteredValue} onGameOver={handleGameOver} />;
  } else if (guessRounds > 0) {
    content = <GameOver rounds={guessRounds} input={enteredValue} onStartGame={handleGameStart} />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.rScreen}>
        <Header title="Guess A Number Game!" />

        {content}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  rScreen: {
    flex: 1,
    marginTop: 0,
    height: "100%",
    alignItems: "center",
  },
});
