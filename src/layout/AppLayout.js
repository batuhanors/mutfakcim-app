import React from "react";

import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
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
        <View style={layoutStyles.text}>
          <Text>Merhaba</Text>
          <TouchableOpacity style={{marginHorizontal:4}} onPress={() => navigation.navigate("Ayarlar")}>
            <Text style={{color: "#1F8A70"}}>{username}</Text>
          </TouchableOpacity>
          <Text>👋</Text>
        </View>
      </View>
      </SafeAreaView>
  );
};

export default AppLayout;
