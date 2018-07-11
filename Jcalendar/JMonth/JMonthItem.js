import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
export default class JMonthItem extends React.PureComponent {
  _jMonthPress = () => {
    this.props.setMonth(this.props.index + 1);
  };
  render() {
    return (
      <TouchableOpacity onPress={this._jMonthPress} style={styles.container}>
        <Text
          style={[
            styles.jMonthText,
            {
              color:
                this.props.currentMonth == this.props.index + 1
                  ? "#0029ff"
                  : "black"
            }
          ]}
        >
          {this.props.monthName}
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
  jMonthText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
