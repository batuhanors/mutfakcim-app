import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function LoginStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
