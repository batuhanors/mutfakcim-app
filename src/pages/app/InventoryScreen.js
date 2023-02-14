import { View, Text, ScrollView, RefreshControl, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { inventoryStyles } from "./style/inventoryStyles";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../utils/redux/reducers/userReducer";
import { getInventory } from "../../utils/service/appServices";
import { DataTable } from 'react-native-paper';


export default function InventoryScreen() {

  const token = useSelector(selectUserToken);

  const [shopList, setShopList] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchInventory()
  }, []);
  

  const fetchInventory = async () => {
    const list = await getInventory(token);
    setShopList(list.data)
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchInventory().then(() => {
      setRefreshing(false);
    })
  }, []);


  
   
  return (
      <View style={inventoryStyles.container}>
      <Text style={{fontSize: 20, marginLeft: 12, marginVertical: 16}}>Envanterdeki Ürünler:</Text>
      <DataTable style={inventoryStyles.tableContainer}>
      <DataTable.Header>
        <DataTable.Title>Ürün Adı</DataTable.Title>
        <DataTable.Title>Birim</DataTable.Title>
        <DataTable.Title>Kategori</DataTable.Title>
      </DataTable.Header>

      <FlatList 
        data = {shopList}
        contentContainerStyle={{paddingBottom: 120}}
        renderItem = {({item}) => (
          <DataTable.Row>
          <DataTable.Cell>{item.productName}</DataTable.Cell>
          <DataTable.Cell>{item.quantity + " " + item.unit}</DataTable.Cell>
          <DataTable.Cell>{item.category}</DataTable.Cell>
          </DataTable.Row>
        )}
        keyExtractor={item => item._id}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </DataTable>
    </View>
  );
}

/*
          shopList.map((item) => {
          return (
            <DataTable.Row key={item._id}>
              <DataTable.Cell>{item.productName}</DataTable.Cell>
              <DataTable.Cell>{item.quantity + " " + item.unit}</DataTable.Cell>
              <DataTable.Cell>{item.category}</DataTable.Cell>
            </DataTable.Row>
          )
        }) */
