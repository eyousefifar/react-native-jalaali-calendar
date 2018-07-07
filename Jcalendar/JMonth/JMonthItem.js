import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export default props => (
  <TouchableOpacity
    onPress={() => {
      props.setMonth(props.index + 1);
    }}
    style={styles.container}
  >
    <Text
      style={[
        styles.jMonthText,
        { color: props.currentMonth == props.index + 1 ? "#0029ff" : "black" }
      ]}
    >
      {props.monthName}
    </Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    width: 60,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  jMonthText: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
