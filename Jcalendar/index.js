import React from "react";
import { View, Text, StyleSheet, Dimensions, InteractionManager } from "react-native";
import Month from "./Month";
import WeekDays from "./WeekDays";
import JMonth from "./JMonth";
import JYear from "./JYear";
import { firstDayOfMonth } from "./utils";
const { width, height } = Dimensions.get("window");
export default class Jcalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: 1397,
      selectedMonth: 2,
      selectedDay: 13
    };
  }
  _setYear = year => {
    if (this.state.selectedYear != year) {
      InteractionManager.runAfterInteractions(()=>{
        this.setState({ selectedYear: year });
      });
    }
  };
  _setMonth = month => {
    if (this.state.selectedMonth != month) {
      InteractionManager.runAfterInteractions(()=>{
        this.setState({ selectedMonth: month });
      }
      });
  };
  _setDay = day => {
    if (this.state.selectedDay != day) {
      InteractionManager.runAfterInteractions(()=> {
        this.setState({ selectedDay: day });
      })
    }
  };
  render() {
    const FDOM = firstDayOfMonth(
      this.state.selectedYear,
      this.state.selectedMonth
    );
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <JYear
            startYear={1300}
            endYear={1450}
            setYear={this._setYear}
            currentYear={this.state.selectedYear}
          />
        </View>
        <View style={{ flex: 1 }}>
          <JMonth
            currentMonth={this.state.selectedMonth}
            setMonth={this._setMonth}
          />
        </View>
        <View style={{ flex: 1 }}>
          <WeekDays />
        </View>
        <View style={{ flex: 7 }}>
          <Month
            startOfMonth={FDOM}
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
