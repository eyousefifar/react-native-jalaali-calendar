import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Week from "../Week";
export default class Month extends React.Component {
  renderWeeks = () => {
    let { startOfMonth } = this.props;
    let weekStart = 9 - startOfMonth;
    let weeks = [];
    while (weekStart <= 31) {
      weeks.push(
        <Week
          key={weekStart}
          startDay={weekStart}
          setDay={this.props.setDay}
          currentDay={this.props.currentDay}
        />
      );
      weekStart = weekStart + 7;
    }
    return weeks;
  };
  firstWeek = () => {
    let { startOfMonth } = this.props;
    return (
      <Week
        firstWeek
        indexOfFirstDay={startOfMonth}
        setDay={this.props.setDay}
        currentDay={this.props.currentDay}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {this.firstWeek()}
        {this.renderWeeks()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
