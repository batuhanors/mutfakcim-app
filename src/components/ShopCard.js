import { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";
import { shopStyles } from "../pages/app/style/shopStyles";
import { MaterialIcons } from '@expo/vector-icons'; 
import { deleteShop } from "../utils/service/appServices";
import { useSelector } from "react-redux";
import { selectUserToken } from "../utils/redux/reducers/userReducer";



const ShopCard = (props) => {

    const {data} = props;
    const token = useSelector(selectUserToken);
    const slideAnim = useRef(new Animated.Value(-500)).current;

    const duration = 500


    const year = data.date.slice(0, 4);
    const month = data.date.slice(6,7);
    const day = data.date.slice(8,10);

    const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    
    

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: duration + (duration*(props.index)), 
            useNativeDriver: true,
          }).start();
    }, [slideAnim]);


    const deleteHandler = () => {

        console.log("deleted shop id: " + data._id);

        deleteShop(data._id, token).then((res) => {
            console.log(res);
        })

    }

    return (
        <Animated.View style={[shopStyles.shopCardContainer, {transform: [{translateX: slideAnim}]}]}>
            <View style={shopStyles.shopItemHeader}>
                <View>
                    <Text style={shopStyles.itemPrice}>{data.totalPrice}₺</Text>
                </View>

                <View style={{flexDirection:"row"}}>
                    <Text style={shopStyles.itemTime}>{day + " " + months[month] + " " +year}</Text>
                    <MaterialIcons onPress={deleteHandler} name="delete" size={24} color="#FF6A74" />
                </View>

            </View>

            {
                data.product.map( (product, index) =>{
                    return(
                        <View style={[shopStyles.shopItem, {borderTopWidth: !index ? 0 : 1,}]} key={index}>
                            <Text style={{flex: 1}}>{product.productName}</Text>
                            <Text style={{flex: 1}}>{product.unitPrice}₺</Text>
                            <Text style={{flex: 1}}>{ product.quantity + " " + product.unit}</Text>             
                            <Text style={{flex: 1}}>{product.category}</Text>
                        </View>
                    )
                } )
            }


        </Animated.View>
    )
}

export default ShopCard;


