import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useSelector } from "react-redux";
import CustomDrawer from "../../components/CustomDrawer";
import AppLayout from "../../layout/AppLayout";
import InventoryScreen from "../../pages/app/InventoryScreen";
import RecipeScreen from "../../pages/app/RecipeScreen";
import ShopScreen from "../../pages/app/ShopScreen";
import { selectUserName } from "../redux/reducers/userReducer";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  const username = useSelector(selectUserName);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Shops"
        screenOptions={{ header: (props) => <AppLayout {...props} /> }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Alışveriş" component={ShopScreen} />
        <Drawer.Screen name="Envanter" component={InventoryScreen} />
        <Drawer.Screen name="Tarifler" component={RecipeScreen} />
      </Drawer.Navigator>
      <StatusBar backgroundColor="#FCFFE7" translucent={false} />
    </NavigationContainer>
  );
}
