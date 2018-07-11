import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import range from "lodash/range";
import JYearItem from "./JYearItem";
export default class JYear extends React.PureComponent {
  constructor(props) {
    super(props);
    this.jYearRange = range(props.startYear, props.endYear + 1, 1);
    this.selectedYearIndex = props.currentYear - props.startYear;
  }
  _getItemLayout = (data, index) => {
    return { length: 60, offset: 60 * index, index: index };
  };
  _keyExtractor = (item, index) => `${item} + ${index}`;
  _renderJYear = ({ item, index }) => {
    return (
      <JYearItem
        setYear={this.props.setYear}
        currentYear={this.props.currentYear}
        jYear={item}
        index={index}
      />
    );
  };
  render() {
    return (
      <View style={style.container} pointerEvents={"box-none"}>
        <FlatList
          data={this.jYearRange}
          style={{ flex: 1 }}
          horizontal
          inverted
          initialScrollIndex={this.selectedYearIndex}
          getItemLayout={this._getItemLayout}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderJYear}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#d3d3d3"
  }
});
