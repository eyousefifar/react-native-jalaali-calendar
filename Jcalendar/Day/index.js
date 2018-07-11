import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { persianNumber } from "../utils";
export default class Day extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selected = undefined;
  }
  // shouldComponentUpdate(nextProps) {
  //   if (this.props.thisDay != nextProps.currentDay && !this.selected) {
  //     return false;
  //   }
  //   return true;
  // }
  _setDay = () => {
    let { thisDay } = this.props;
    if (thisDay != null) {
      this.props.setDay(thisDay);
    }
  };
  render() {
    this.selected = this.props.thisDay == this.props.currentDay;
    return (
      <TouchableOpacity style={styles.container} onPress={this._setDay}>
        <Text style={this.selected ? styles.daySelected : styles.day}>
          {persianNumber(this.props.thisDay)}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: StyleSheet.hairlineWidth
  },
  day: {
    fontSize: 18,
    color: "black"
  },
  daySelected: {
    fontSize: 20,
    color: "blue"
  }
});
