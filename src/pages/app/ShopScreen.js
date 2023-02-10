import { View, Text, Pressable, ScrollView, Modal, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { shopStyles } from "./style/shopStyles";

import { DataTable } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../../utils/redux/reducers/userReducer";
import { addShops, getShops } from "../../utils/service/appServices";
import ShopCard from "../../components/ShopCard";

import { AntDesign } from '@expo/vector-icons'; 
import { selectProductName, setCategory, setName, setPrice, setUnit } from "../../utils/redux/reducers/shopReducer";


const AddShop = () => {

  const [openModal, setOpenModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUnit, setProductUnit] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [addList, setAddList] = useState([]);

  const dispatch = useDispatch();
  const name = useSelector(selectProductName);



  const pressHandler = () => {
    setOpenModal(true)
  }

  const nameHandler = (text) => setProductName(text);
  const priceHandler = (text) => setProductPrice(text);
  const unitHandler = (text) => setProductUnit(text);
  const categoryHandler = (text) => setProductCategory(text);

  const addHandler = () => {

    const listItem = {
      id: Math.random(),
      name: productName,
      price: productPrice,
      unit: productUnit,
      category: productCategory
    };

    setAddList(addList => [...addList, listItem]);

    setProductName("");
    setProductPrice("");
    setProductUnit("");
    setProductCategory("");
    setOpenModal(false);
  }

  return (
    <View style={shopStyles.addShopContainer}>
      <View > 
        <Text style={shopStyles.addShopText}>Alışveriş Ekle</Text>
      </View>
      <View style={shopStyles.flexRow}>
        <Pressable onPress={pressHandler} style={{flex: 1, marginHorizontal: 2 }}><Text style={[shopStyles.addShopBtn, shopStyles.btnText]}>Ürün Ekle</Text></Pressable>
        <Pressable  style={{flex: 1, marginHorizontal: 2}}><Text style={[shopStyles.addShopBtn, shopStyles.btnText]}>Geçmişten Ürün Ekle</Text></Pressable>
        <Pressable  style={{flex: 1, marginHorizontal: 2}}><Text style={[shopStyles.addShopBtn, shopStyles.btnText]}>Hızlı Ürün Ekle</Text></Pressable>
      </View>

      <ShopTable list={addList}/>

        <Modal visible={openModal} transparent={true} onRequestClose={()=> setOpenModal(false)} animationType="fade"> 
      <View style={shopStyles.centeredDiv}>
          < SafeAreaView style={shopStyles.modal}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 21, marginLeft: 12, marginVertical: 10}}>Ürün Ekle </Text>
            <Pressable onPress={() => setOpenModal(false)}><View><AntDesign name="close" size={32} color="black" /></View></Pressable>
            </View>

            <TextInput placeholder="Ürün Adı" style={shopStyles.modalInput} value={productName} onChangeText={nameHandler}></TextInput>    
            <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
              <TextInput placeholder="Fiyatı" style={shopStyles.flexInput} value={productPrice} onChangeText={priceHandler}></TextInput> 
              <TextInput placeholder="Birimi" style={shopStyles.flexInput} value={productUnit} onChangeText={unitHandler}></TextInput> 
              <TextInput placeholder="Kategori" style={shopStyles.flexInput} value={productCategory} onChangeText={categoryHandler}></TextInput> 
            </View>   

            <TouchableOpacity style={shopStyles.modalBtn}  onPress={addHandler}><Text style={{fontSize: 16, fontWeight: "600", color: "white"}}>Ürünü Ekle</Text></TouchableOpacity>    
          </SafeAreaView>
      </View>
        </Modal>
    </View>
  )
}

const ShopTable = (props) => {

  const saveHandler = (list) => {

   addShops(list)

  }

  return (
    <View>
    <View style={shopStyles.tableContainer}>
    <DataTable>
      <DataTable.Header style={shopStyles.tableHeader}>
        <DataTable.Title>Ürün Adı</DataTable.Title>
        <DataTable.Title>Fiyat</DataTable.Title>
        <DataTable.Title>Birim</DataTable.Title>
        <DataTable.Title>Kategori</DataTable.Title>
      </DataTable.Header>

      {
        props.list.map((item) => {
          return (
            <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell>{item.price}</DataTable.Cell>
            <DataTable.Cell>{item.unit}</DataTable.Cell>
            <DataTable.Cell>{item.category}</DataTable.Cell>
          </DataTable.Row>
          )
        } )
      }
  
    </DataTable>
    </View>

    <View style={shopStyles.saveShopBtn}>
      <Pressable onPress={() => saveHandler(props.list)}><Text style={shopStyles.btnText}>Alışverişi Kaydet</Text></Pressable>
    </View>


    </View>
  );
};

export default function ShopScreen() {

  const token = useSelector(selectUserToken);

  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    FetchShop();
  }, []);
  
  const FetchShop = async () => {
    await getShops(token).then((res) => {
      const data = res.data;
      setShopList(data)
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect( () => {
  }, [shopList]);

  return (
    <View style={shopStyles.shopContainer}>
    <ScrollView>
      <AddShop />
      <View>
      <Text style={shopStyles.shopHeader}>Alışverişlerim</Text>
     
    </View>

    {
      shopList.map((item, index) =>{
        return <ShopCard data={item} key={index}/>
      })
    }
    </ScrollView>

    </View>
  );
}
