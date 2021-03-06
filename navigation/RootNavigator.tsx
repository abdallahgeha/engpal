import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import * as React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import SignInScreen from "../screens/SignInScreen";
import RegisterScreen from "../screens/RegisterScreen";

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Auth" component={SignInScreen} />
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="Root" component={BottomTabNavigator} />
      <Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Navigator>
  );
};

export default RootNavigator;
