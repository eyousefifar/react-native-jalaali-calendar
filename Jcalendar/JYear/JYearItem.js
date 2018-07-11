import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { persianNumber } from "../utils";
export default class JYearItem extends React.PureComponent {
  _yearPress = () => {
    this.props.setYear(this.props.jYear);
  };
  render() {
    return (
      <TouchableOpacity onPress={this._yearPress} style={styles.container}>
        <Text
          style={[
            styles.jYearText,
            {
              color:
                this.props.currentYear == this.props.jYear ? "#0cf" : "black"
            }
          ]}
        >
          {persianNumber(this.props.jYear)}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 60,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  jYearText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
