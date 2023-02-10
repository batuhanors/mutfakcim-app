import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { inventoryStyles } from "./style/inventoryStyles";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../utils/redux/reducers/userReducer";
import { getInventory } from "../../utils/service/appServices";
import { DataTable } from 'react-native-paper';


export default function InventoryScreen() {

  const token = useSelector(selectUserToken);

  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    fetchInventory()
  }, []);
  

  const fetchInventory = async () => {
    const list = await getInventory(token);
    setShopList(list.data)
  }
  
   
  return (
    <ScrollView style={inventoryStyles.container}>
      <Text style={{fontSize: 20, marginLeft: 12, marginVertical: 16}}>Envanterdeki Ürünler:</Text>
      <DataTable style={inventoryStyles.tableContainer}>
      <DataTable.Header>
        <DataTable.Title>Ürün Adı</DataTable.Title>
        <DataTable.Title>Birim</DataTable.Title>
        <DataTable.Title>Kategori</DataTable.Title>
      </DataTable.Header>
      {
        shopList.map((item) => {
          return (
            <DataTable.Row key={item._id}>
            <DataTable.Cell>{item.productName}</DataTable.Cell>
            <DataTable.Cell>{item.quantity + " " + item.unit}</DataTable.Cell>
            <DataTable.Cell>{item.category}</DataTable.Cell>
          </DataTable.Row>
          )
        })
      }
    </DataTable>
    </ScrollView>
  );
}
