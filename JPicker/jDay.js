import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  View
} from "react-native";
import range from "lodash/range";
import Day from "../Jcalendar/Day";
const JDayItem = props => {
  return (
    <View style={style.container}>
      <Day
        index={props.index}
        currentDay={props.currentDay}
        setDay={props.setDay}
        thisDay={props.thisDay}
      />
    </View>
  );
};
export default class JDay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectedDayIndex = this.props.currentDay - 1;
  }
  _keyExtractor = (item, index) => `${item} + ${index}`;
  _getItemLayout = (data, index) => {
    return { length: 30, offset: 30 * index, index: index };
  };
  _renderJDay = ({ item, index }) => {
    return (
      <JDayItem
        index={index}
        currentDay={this.props.currentDay}
        setDay={this.props.setDay}
        thisDay={item}
      />
    );
  };
  render() {
    const jData = range(1, this.props.jDayInMonth + 1, 1); //TODO: this can be optimized more

    return (
      <FlatList
        data={jData}
        style={{ flex: 1 }}
        horizontal
        inverted
        initialScrollIndex={this.selectedDayIndex}
        getItemLayout={this._getItemLayout}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderJDay}
      />
    );
  }
}
const style = StyleSheet.create({
  container: { width: 30, height: "100%" }
});
