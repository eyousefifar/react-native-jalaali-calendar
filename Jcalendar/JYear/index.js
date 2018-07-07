import React from "react";
import { TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import range from "lodash/range";
import JYearItem from "./JYearItem";
export default class JYear extends React.Component {
  constructor(props) {
    super(props);
    this.jYearRange = range(props.startYear, props.endYear, 1);
  }
  _keyExtractor = (item, index) => item + index;
  _renderJYear = ({ item, index }) => {
    return (
      <JYearItem
        setYear={this.props.setYear}
        currentYear={this.props.currentYear}
        jyear={item}
        index={index}
      />
    );
  };
  render() {
    return (
      <FlatList
        data={this.jYearRange}
        style={{ flex: 1 }}
        horizontal
        inverted
        keyExtractor={this._keyExtractor}
        renderItem={this._renderJYear}
      />
    );
  }
}
