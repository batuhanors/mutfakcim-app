import { View, Text, Pressable } from "react-native";
import React from "react";
import { shopStyles } from "./style/shopStyles";

const AddShop = () => {

  const pressHandler = () => {
    console.log("You pressed the button");
  }

  return (
    <View style={shopStyles.addShopContainer}>
      <View> 
        <Text>Alışveriş Ekle</Text>
      </View>

      <View style={shopStyles.flexRow}>
        <Pressable onPress={pressHandler}><Text style={shopStyles.addShopBtn}>Hızlı Ürün Ekle</Text></Pressable>
        <Pressable onPress={pressHandler}><Text style={shopStyles.addShopBtn}>Hızlı Ürün Ekle</Text></Pressable>
        <Pressable onPress={pressHandler}><Text style={shopStyles.addShopBtn}>Geçmişten Ürün Ekle</Text></Pressable>
      </View>
    </View>
  )
}

export default function ShopScreen() {
  return (
    <View style={shopStyles.shopContainer}>
      <Text>ShopScreen</Text>
      <AddShop />
    </View>
  );
}
