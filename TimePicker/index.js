import React from "react";
import { View, StyleSheet, Text, I18nManager } from "react-native";
import TPicker from "./TPicker";
import { persianNumber } from "../Jcalendar/utils";

export default class TimePicker extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hour: 8,
      minute: 59,
      amPm: "قبل از ظهر"
    };
  }
  setHour = hour => {
    this.setState({ hour: hour });
  };
  setMinute = minute => {
    this.setState({ minute: minute });
  };
  setAmPm = stat => {
    this.setState({ amPm: stat });
  };
  render() {
    const {
      timeItemStyle,
      amPmStyle,
      amPm,
      timePickerStyle,
      selectedMinute,
      selectedHour
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.timeText}>
          <Text style={styles.time}>
            {persianNumber(this.state.hour) +
              " : " +
              persianNumber(this.state.minute)}
          </Text>
          {this.props.amPm && (
            <Text style={styles.amPmText}>{this.state.amPm}</Text>
          )}
        </View>
        <View style={styles.timePicker}>
          <TPicker
            setHour={this.setHour}
            setMinute={this.setMinute}
            setAmPm={this.setAmPm}
            amPm={amPm}
            timeItemStyle={timeItemStyle}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  timeText: {
    flex: 3,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse"
  },
  time: {
    color: "black",
    fontSize: 26,
    textAlign: "center",
    textAlignVertical: "center",
    marginHorizontal: 8
  },
  amPmText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    marginHorizontal: 8
  },
  timePicker: {
    flex: 7
  }
});
