import React from "react";
import { View, StyleSheet, Text, I18nManager } from "react-native";
import { persianNumber } from "../Jcalendar/utils";
import range from "lodash/range";
import Picker from "react-native-wheel-picker";
const PickerItem = Picker.Item;
export default class TPicker extends React.PureComponent {
  static defaultProps = {
    timeItemStyle: {
      color: "black",
      fontSize: 26
    },
    amPmStyle: {
      color: "black",
      fontSize: 16
    },
    amPm: false,
    selectedMinute: 0,
    selectedHour: 0,
    amOrPm: "am"
  };
  constructor(props) {
    super(props);
    let hourType = props.amPm ? 12 : 24;
    this.hour = range(0, hourType, 1);
    this.minute = range(0, 60, 1);
    this.timeSwitch = ["قبل از ظهر", "بعد از ظهر"];
  }
  setHourIndex = index => {
    this.props.setHour(this.hour[index]);
  };
  setMinuteIndex = index => {
    this.props.setMinute(this.minute[index]);
  };
  setTimeSwitch = index => {
    this.props.setAmPm(this.timeSwitch[index]);
  };
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <View style={[styles.timePickerContainer, this.props.timePickerStyle]}>
          <Picker
            style={styles.picker}
            selectedValue={this.minute.indexOf(this.props.selectedMinute)}
            itemStyle={this.props.timeItemStyle}
            onValueChange={this.setMinuteIndex}
          >
            {this.minute.map((value, index) => (
              <PickerItem
                label={persianNumber(value)}
                value={index}
                key={`${value}+${index}`}
              />
            ))}
          </Picker>
        </View>
        <View style={[styles.timePickerContainer, this.props.timePickerStyle]}>
          <Picker
            style={styles.picker}
            selectedValue={this.hour.indexOf(this.props.selectedHour)}
            itemStyle={this.props.timeItemStyle}
            onValueChange={this.setHourIndex}
          >
            {this.hour.map((value, index) => (
              <PickerItem
                label={persianNumber(value)}
                value={index}
                key={`${value}+${index}`}
              />
            ))}
          </Picker>
        </View>
        {this.props.amPm && (
          <View style={styles.timeSwitchContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.props.amOrPm === "am" ? 0 : 1}
              itemStyle={this.props.amPmStyle}
              onValueChange={this.setTimeSwitch}
            >
              {this.timeSwitch.map((value, index) => (
                <PickerItem
                  label={persianNumber(value)}
                  value={index}
                  key={`${value}+${index}`}
                />
              ))}
            </Picker>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse"
  },
  timePickerContainer: {
    flex: 2
  },
  timeSwitchContainer: {
    flex: 1
  },
  picker: {
    flex: 1
  }
});
