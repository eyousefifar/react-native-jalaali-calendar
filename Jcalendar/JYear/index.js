import React from "react";
import { TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import range from "lodash/range";
import { persianNumber } from "../utils";
export default class JYear extends React.Component {
  constructor(props) {
    super(props);
    this.jYearRange = range(props.startYear, props.endYear, 1);
  }
  _renderJYear = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.setYear(item);
        }}
        style={{
          width: 60,
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            color: this.props.currentYear == item ? "#0ff" : "black",
            fontSize: 14,
            fontWeight: "bold",
            textAlign: "center",
            textAlignVertical: "center"
          }}
        >
          {persianNumber(item)}
        </Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <FlatList
        data={this.jYearRange}
        style={{ flex: 1 }}
        horizontal
        inverted
        keyExtractor={(item, index) => `${item}+${index}`}
        renderItem={this._renderJYear}
      />
    );
  }
}
