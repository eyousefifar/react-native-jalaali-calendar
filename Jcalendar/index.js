import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Month from "./Month";
import WeekDays from "./WeekDays";
import JMonth from "./JMonth";
import JYear from "./JYear";
import { jMonthInfo } from "./utils";
export default class Jcalendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: props.selectedDate.year,
      selectedMonth: props.selectedDate.month,
      selectedDay: props.selectedDate.month
    };
  }
  _setYear = year => {
    if (this.state.selectedYear != year) {
      this.setState({ selectedYear: year });
    }
  };
  _setMonth = month => {
    if (this.state.selectedMonth != month) {
      this.setState({ selectedMonth: month });
    }
  };
  _setDay = day => {
    if (this.state.selectedDay != day) {
      this.setState({ selectedDay: day });
    }
  };
  render() {
    const jMonthInformation = jMonthInfo(
      this.state.selectedYear,
      this.state.selectedMonth
    );
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <JYear
            startYear={this.props.startYear}
            endYear={this.props.endYear}
            setYear={this._setYear}
            currentYear={this.state.selectedYear}
          />
        </View>
        <View style={styles.container}>
          <JMonth
            currentMonth={this.state.selectedMonth}
            setMonth={this._setMonth}
          />
        </View>
        <View style={styles.container}>
          <WeekDays />
        </View>
        <View style={{ flex: 7 }}>
          <Month
            jMonthInfo={jMonthInformation}
            setDay={this._setDay}
            currentDay={this.state.selectedDay}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
