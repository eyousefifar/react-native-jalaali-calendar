import React from "react";
import { TouchableOpacity, StyleSheet, FlatList, Text } from "react-native";
import { jMonths } from "../utils";
export default class JMonth extends React.Component {
  _renderJMonth = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.setMonth(index + 1);
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
            color: this.props.currentMonth == index + 1 ? "#0029ff" : "black",
            fontSize: 13,
            fontWeight: "bold",
            textAlign: "center",
            textAlignVertical: "center"
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <FlatList
        data={jMonths}
        style={{ flex: 1 }}
        horizontal
        inverted
        keyExtractor={(item, index) => `${item}+${index}`}
        renderItem={this._renderJMonth}
      />
    );
  }
}
