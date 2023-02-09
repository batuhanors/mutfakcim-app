import React from "react";

import { View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { layoutStyles } from "./layoutstyle";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUserName } from "../utils/redux/reducers/userReducer";


const AppLayout = () => {
  const navigation = useNavigation();

  const username = useSelector(selectUserName);
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
        <Text> Merhaba {username} 👋</Text>
      </View>
      </SafeAreaView>
  );
};

export default AppLayout;
