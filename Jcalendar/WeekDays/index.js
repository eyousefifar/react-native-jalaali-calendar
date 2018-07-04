import React from "react";
import { View, StyleSheet, Text, I18nManager } from "react-native";
import { jWeekdays } from "../utils";
export default class WeekDays extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {jWeekdays.map((value, index) => (
          <Text key={index} style={styles.weekDay}>
            {value}
          </Text>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#dcdcdc"
  },
  weekDay: {
    flex: 1,
    fontSize: 12,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
