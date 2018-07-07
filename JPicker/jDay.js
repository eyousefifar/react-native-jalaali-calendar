import React from "react";
import { TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import range from "lodash/range";
import Day from "../Jcalendar/Day";
export default class JDay extends React.Component {
  _keyExtractor = (item, index) => item + index;
  _getItemLayout = (data, index) => {
    return { length: 15, offset: 15 * index, index: index };
  };
  _renderJDay = ({ item, index }) => {
    return (
      <Day
        index={index}
        currentDay={this.props.currentMonth}
        setDay={this.props.setMonth}
        thisDay={item}
      />
    );
  };
  render() {
    const jData = range(1, this.props.jDayInMonth, 1); //TODO: this can be optimized more
    return (
      <FlatList
        data={jData}
        style={{ flex: 1 }}
        horizontal
        inverted
        getItemLayout={this._getItemLayout}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderJDay}
      />
    );
  }
}
