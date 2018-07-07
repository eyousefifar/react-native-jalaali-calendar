import React from "react";
import { View, Modal, Text, FlatList } from "react-native";
import JYear from "../Jcalendar/JYear";
import JMonth from "../Jcalendar/JMonth";
import JDay from "./jDay";
export default class JPicker extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <JYear startYear={1395} endYear={1450} />
        <JMonth />
        <JDay />
      </View>
    );
  }
}
