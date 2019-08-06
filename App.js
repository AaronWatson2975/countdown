import React from "react";
import EventList from "./EventList";
import { createStackNavigator, createAppContainer } from "react-navigation";
import EventForm from "./EventForm";

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: "Your Events"
    })
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: "Add"
    })
  }
});

export default createAppContainer(AppNavigator);
