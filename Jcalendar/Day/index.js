import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { persianNumber } from "../utils";
export default class Day extends React.Component {
  render() {
    const { thisDay, currentDay } = this.props;
    const selected = thisDay == currentDay ? "blue" : "black";
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          if (thisDay != null) {
            this.props.setDay(thisDay);
          }
        }}
      >
        <Text style={{ color: selected }}>{persianNumber(thisDay)}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
