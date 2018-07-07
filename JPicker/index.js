import React from "react";
import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import JYear from "../Jcalendar/JYear";
import JMonth from "../Jcalendar/JMonth";
import JDay from "./jDay";
import JInputPicker from "./JInputPicker";
const { width, height } = Dimensions.get("window");
import { persianNumber } from "../Jcalendar/utils";
export default class JPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: 1397,
      selectedMonth: 12,
      selectedDay: 13
    };
  }
  _setYear = jYear => {
    this.setState({ selectedYear: jYear });
  };
  _setMonth = jMonth => {
    this.setState({ selectedMonth: jMonth });
  };
  _setDay = jDay => {
    this.setState({ selectedDay: jDay });
  };
  _returnDate = () => {
    this.props.getDate({
      jYear: this.state.selectedYear,
      jMonth: this.state.selectedMonth,
      jDay: this.state.selectedDay
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <JInputPicker
          jYear={this.state.selectedYear}
          jMonth={this.state.selectedMonth}
          jDay={this.state.selectedDay}
          setYear={this._setYear}
          setMonth={this._setMonth}
          setDay={this._setDay}
        />
        <Text style={styles.text}>سال</Text>
        <JYear
          startYear={1395}
          endYear={1450}
          currentYear={this.state.selectedYear}
          setYear={this._setYear}
        />
        <Text style={styles.text}>ماه</Text>
        <JMonth
          currentMonth={this.state.selectedMonth}
          setMonth={this._setMonth}
        />
        <Text style={styles.text}>روز</Text>
        <JDay
          jDayInMonth={31}
          currentDay={this.state.selectedDay}
          setDay={this._setDay}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 5,
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: "#d3d3d3"
          }}
        >
          <Text>انتخاب</Text>
          <Text>لغو</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: height / 1.8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d3d3d3",
    margin: 5
  },
  text: {
    color: "gray",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#d3d3d3",
    marginHorizontal: width / 4
  }
});
