import React, { useState, useRef } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

import Styles from "../Constants/Styles";
import SpecialTitle from "../Components/SpecialTitle";
import Colors from "../Constants/Colors";

function GameOver(props) {
  return (
    <View>
      <SpecialTitle title="Opponent Guess the Output Right!!!" />
      <View style={{ ...Styles.card, ...styles.upperMassage }}>
        <SpecialTitle title={"Your Number was:" + props.input} />
      </View>
      <View style={{ ...Styles.card, ...styles.lowerMasssage }}>
        <SpecialTitle title={"Total Guess Rounds:" + props.rounds} />
      </View>
      <Button title="new game" onPress={props.onStartGame} />

      <View style={styles.img}>
        <Image source={require("../assets/download.jpg")} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    alignItems: "center",
    width: "90%",
    height: "80%",
    padding: 100,
  },
  upperMassage: {
    padding: 20,
    marginVertical: 10,
  },
  lowerMasssage: {
    padding: 20,
    marginVertical: 10,
  },
});

export default GameOver;
