import React from "react";
import { View, StyleSheet, I18nManager } from "react-native";
import Day from "../Day";
export default class Week extends React.Component {
  renderDays = () => {
    let { startDay, firstWeek, indexOfFirstDay, jDayInMonth } = this.props;
    if (firstWeek) {
      let days = [];
      let thisDay = 1;
      for (let i = 1; i <= 7; i++) {
        if (i < indexOfFirstDay) {
          days.push(
            <Day
              key={i + thisDay}
              thisDay={null}
              setDay={this.props.setDay}
              currentDay={this.props.currentDay}
            />
          );
        } else {
          days.push(
            <Day
              key={i + thisDay}
              thisDay={thisDay}
              setDay={this.props.setDay}
              currentDay={this.props.currentDay}
            />
          );
          thisDay++;
        }
      }
      return days;
    } else {
      let days = [];
      let thisDay = startDay;
      for (let i = 0; i < 7; i++) {
        if (thisDay <= jDayInMonth) {
          days.push(
            <Day
              key={i + thisDay}
              thisDay={thisDay}
              setDay={this.props.setDay}
              currentDay={this.props.currentDay}
            />
          );
          thisDay++;
        } else {
          days.push(
            <Day
              key={i + thisDay}
              thisDay={null}
              setDay={this.props.setDay}
              currentDay={this.props.currentDay}
            />
          );
        }
      }
      return days;
    }
  };
  render() {
    return <View style={styles.container}>{this.renderDays()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse"
  }
});
