import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { persianNumber } from "../utils";
export default props => (
  <TouchableOpacity
    onPress={() => {
      props.setYear(props.jYear);
    }}
    style={styles.container}
  >
    <Text
      style={[
        styles.jMonthText,
        {
          color: props.currentYear == props.jYear ? "#0ff" : "black"
        }
      ]}
    >
      {persianNumber(props.jYear)}
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
