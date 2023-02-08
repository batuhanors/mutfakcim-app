import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

const AuthLayout = ({ children }) => {
  return (
    <View>
      <StatusBar backgroundColor="#FCFFE7" translucent={false} />
      {children}
    </View>
  );
};

export default AuthLayout;
