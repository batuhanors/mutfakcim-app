import { ScrollView, Text, View } from "react-native";
import { shopStyles } from "../pages/app/style/shopStyles";



const ShopCard = (props) => {

    const {data} = props;
    
    const year = data.date.slice(0, 4);
    const month = data.date.slice(6,7);
    const day = data.date.slice(8,10);

    const months = ["", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    return (
        <View style={shopStyles.shopCardContainer}>
            <View style={shopStyles.shopItemHeader}>
                <Text style={shopStyles.itemPrice}>{data.totalPrice}₺</Text>
                <Text style={shopStyles.itemTime}>{day + " " + months[month] + " " +year}</Text>
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


        </View>
    )
}

export default ShopCard;
