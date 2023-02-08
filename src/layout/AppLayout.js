import React from "react";

import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { layoutStyles } from "./layoutstyle";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AppLayout = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={layoutStyles.topBar}>
        <Feather
          name="menu"
          size={36}
          color="black"
          onPress={() => navigation.openDrawer()}
          style={layoutStyles.menuIcon}
        />
        <Text> Merhaba Batuhan 👋</Text>
      </View>
    </View>
  );
};

export default AppLayout;
