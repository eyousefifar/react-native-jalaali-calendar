import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import JYear from "../Jcalendar/JYear";
import JMonth from "../Jcalendar/JMonth";
import JDay from "./jDay";
import JInputPicker from "./JInputPicker";
const { width, height } = Dimensions.get("window");
import {
  persianNumber,
  englishNumber,
  getJDayInMonth
} from "../Jcalendar/utils";
export default class JPicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedYear: props.selectedDate.year,
      selectedMonth: props.selectedDate.month,
      selectedDay: props.selectedDate.day
    };
  }
  _setYear = jYear => {
    if (this.state.selectedYear != jYear) {
      this.setState({ selectedYear: jYear });
    }
  };
  _setMonth = jMonth => {
    if (this.state.selectedMonth != jMonth) {
      this.setState({ selectedMonth: jMonth });
    }
  };
  _setDay = jDay => {
    if (this.state.selectedDay != jDay) {
      this.setState({ selectedDay: jDay });
    }
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
          startYear={this.props.minYear}
          endYear={this.props.maxYear}
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
          jDayInMonth={getJDayInMonth(
            this.state.selectedYear,
            this.state.selectedMonth
          )}
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
            borderTopColor: "#d3d3d3",
            marginHorizontal: 10
          }}
        >
          <TouchableOpacity onPress={this._returnDate}>
            <Text style={styles.controlButtonText}>انتخاب</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.dismiss}>
            <Text style={styles.controlButtonText}>لغو</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d3d3d3"
  },
  text: {
    color: "gray",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#d3d3d3",
    marginHorizontal: width / 4
  },
  controlButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  }
});
