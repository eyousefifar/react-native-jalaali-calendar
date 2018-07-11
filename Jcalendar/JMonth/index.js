import React from "react";
import { TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import { jMonths } from "../utils";
import JMonthItem from "./JMonthItem";
export default class JMonth extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectedMonthIndex = props.currentMonth - 1;
  }
  _getItemLayout = (data, index) => {
    return { length: 60, offset: 60 * index, index: index };
  };
  _keyExtractor = (item, index) => `${item} + ${item}`;
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
        initialScrollIndex={this.selectedMonthIndex}
        getItemLayout={this._getItemLayout}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderJMonth}
      />
    );
  }
}
