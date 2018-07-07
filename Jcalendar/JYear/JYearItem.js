import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { persianNumber } from "../utils";
export default props => (
  <TouchableOpacity
    onPress={() => {
      props.setYear(props.jyear);
    }}
    style={styles.container}
  >
    <Text
      style={[
        styles.jMonthText,
        {
          color: props.currentYear == item ? "#0ff" : "black"
        }
      ]}
    >
      {persianNumber(props.jyear)}
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
  jYearText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
