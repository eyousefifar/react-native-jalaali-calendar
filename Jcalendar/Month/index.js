import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Week from "../Week";
export default class Month extends React.PureComponent {
  renderWeeks = () => {
    let { jMonthInfo } = this.props;
    let weekStart = 9 - jMonthInfo.startOfMonth;
    let weeks = [];
    while (weekStart <= jMonthInfo.jDayInMonth) {
      weeks.push(
        <Week
          jDayInMonth={jMonthInfo.jDayInMonth}
          key={`${weekStart}`}
          startDay={weekStart}
          setDay={this.props.setDay}
          currentDay={this.props.currentDay}
        />
      );
      weekStart = weekStart + 7;
    }
    return weeks;
  };
  render() {
    return (
      <View style={styles.container}>
        <Week
          firstWeek
          indexOfFirstDay={this.props.jMonthInfo.startOfMonth}
          setDay={this.props.setDay}
          currentDay={this.props.currentDay}
        />
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
