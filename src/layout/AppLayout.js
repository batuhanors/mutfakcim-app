import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { layoutStyles } from "./layoutstyle";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { x } from "react-native";

const AppLayout = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
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
      </SafeAreaView>
  );
};

export default AppLayout;
