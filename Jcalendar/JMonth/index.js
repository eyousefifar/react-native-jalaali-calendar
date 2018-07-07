import React from "react";
import { TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import { jMonths } from "../utils";
import JMonthItem from "./JMonthItem";
export default class JMonth extends React.Component {
  _keyExtractor = (item, index) => item + index;
  _renderJMonth = ({ item, index }) => {
    return (
      <JMonthItem
        index={index}
        currentMonth={this.props.currentMonth}
        setMonth={this.props.setMonth}
        monthName={item}
      />
    );
  };
  render() {
    return (
      <FlatList
        data={jMonths}
        style={{ flex: 1 }}
        horizontal
        inverted
        keyExtractor={this._keyExtractor}
        renderItem={this._renderJMonth}
      />
    );
  }
}
