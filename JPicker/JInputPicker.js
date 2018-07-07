import React from "react";
import { View, StyleSheet, TextInput, I18nManager } from "react-native";
import { persianNumber, englishNumber } from "../Jcalendar/utils";
export default class JInputPicker extends React.Component {
  _setYear = text => {
    let num = englishNumber(text);
    this.props.setYear(num);
  };
  _setMonth = text => {
    let num = englishNumber(text);
    this.props.setMonth(num);
  };
  _setDay = text => {
    let num = englishNumber(text);
    this.props.setDay(num);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"سال"}
            defaultValue={persianNumber(this.props.jYear)}
            maxLength={4}
            style={styles.textInput}
            underlineColorAndroid={"transparent"}
            onChangeText={this._setYear}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref => (this.monthRef = ref)}
            placeholder={"ماه"}
            defaultValue={persianNumber(this.props.jMonth)}
            maxLength={2}
            style={styles.textInput}
            underlineColorAndroid={"transparent"}
            onChangeText={this._setMonth}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"روز"}
            defaultValue={persianNumber(this.props.jDay)}
            maxLength={2}
            style={styles.textInput}
            underlineColorAndroid={"transparent"}
            onChangeText={this._setDay}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    marginBottom: 5
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInput: {
    width: 70,
    height: "100%",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#808080",
    textAlign: "center",
    fontSize: 18
  }
});
