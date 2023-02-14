import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";

import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome5 } from '@expo/vector-icons';
import { drawerStyles } from "./styles/drawerStyles";
import { useDispatch } from "react-redux";
import { logOut } from "../utils/redux/reducers/userReducer";
import Toast from 'react-native-toast-message';

export default function CustomDrawer(props) {
  const routeList = props.state.routes;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const iconList = ["shopping-basket", "book", "cookie-bite", "user-cog"];

  const logoutHandler = () => {
    dispatch(logOut());
    console.log("Logout successful");
    Toast.show({
      type: 'success',
      text1: 'Başarıyla çıkış yaptınız'
    });
  }

  return (
    
    <View style={{ paddingLeft: 10, backgroundColor: "#FCFFE7", flex: 1 }}>
      <SafeAreaView>
      <Svg
        width="190"
        height="72"
        viewBox="0 0 190 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M2.03658 26.0909H10.0909L16.9233 42.7514H17.2386L24.071 26.0909H32.1254V53H25.7923V36.4709H25.5689L19.1044 52.8292H15.0575L8.59304 36.3789H8.36967V53H2.03658V26.0909ZM49.203 44.2887V32.8182H55.615V53H49.4921V49.2422H49.2819C48.8351 50.4773 48.0731 51.4583 46.9957 52.1854C45.927 52.9036 44.635 53.2628 43.1196 53.2628C41.7443 53.2628 40.5355 52.9474 39.4932 52.3168C38.4508 51.6861 37.6405 50.8058 37.0624 49.6758C36.4843 48.537 36.1908 47.2056 36.1821 45.6815V32.8182H42.6072V44.4201C42.6159 45.515 42.905 46.3778 43.4743 47.0085C44.0437 47.6392 44.8189 47.9545 45.8 47.9545C46.4394 47.9545 47.0132 47.8144 47.5212 47.5341C48.038 47.245 48.4453 46.829 48.7432 46.2859C49.0497 45.734 49.203 45.0683 49.203 44.2887ZM71.0962 32.8182V37.5483H58.3643V32.8182H71.0962ZM61.0316 27.983H67.4567V46.6538C67.4567 47.0479 67.518 47.3677 67.6406 47.6129C67.772 47.8494 67.9603 48.0202 68.2056 48.1254C68.4509 48.2217 68.7443 48.2699 69.0859 48.2699C69.3312 48.2699 69.5896 48.248 69.8612 48.2042C70.1415 48.1516 70.3517 48.1078 70.4918 48.0728L71.4641 52.7109C71.1576 52.7985 70.724 52.908 70.1634 53.0394C69.6115 53.1708 68.9502 53.254 68.1793 53.2891C66.6727 53.3591 65.3807 53.1839 64.3033 52.7635C63.2346 52.3343 62.4156 51.6686 61.8462 50.7663C61.2856 49.8641 61.0141 48.7298 61.0316 47.3633V27.983ZM85.845 32.8182V37.5483H72.8635V32.8182H85.845ZM75.5701 53V31.7933C75.5701 30.2341 75.8636 28.9421 76.4505 27.9173C77.0373 26.8836 77.852 26.1128 78.8944 25.6048C79.9367 25.0879 81.1412 24.8295 82.5076 24.8295C83.4011 24.8295 84.242 24.8996 85.0304 25.0398C85.8275 25.1712 86.4187 25.2894 86.8042 25.3945L85.7793 30.0984C85.5428 30.0195 85.2537 29.9538 84.9121 29.9013C84.5792 29.8487 84.2639 29.8224 83.9661 29.8224C83.2128 29.8224 82.696 29.9889 82.4157 30.3217C82.1354 30.6546 81.9952 31.1101 81.9952 31.6882V53H75.5701ZM93.8303 53.3416C92.5427 53.3416 91.3996 53.127 90.401 52.6978C89.4112 52.2598 88.6272 51.6029 88.0491 50.7269C87.4797 49.8422 87.195 48.7341 87.195 47.4027C87.195 46.2815 87.3921 45.3355 87.7863 44.5646C88.1805 43.7938 88.7236 43.1675 89.4156 42.6857C90.1076 42.204 90.9047 41.8404 91.8069 41.5952C92.7091 41.3411 93.6727 41.1703 94.6975 41.0827C95.845 40.9776 96.7691 40.8681 97.4699 40.7543C98.1707 40.6316 98.6787 40.4608 98.9941 40.2418C99.3182 40.0141 99.4802 39.6944 99.4802 39.2827V39.217C99.4802 38.5425 99.2481 38.0213 98.7838 37.6534C98.3196 37.2855 97.6933 37.1016 96.9049 37.1016C96.0553 37.1016 95.372 37.2855 94.8552 37.6534C94.3384 38.0213 94.0099 38.5294 93.8698 39.1776L87.944 38.9673C88.1192 37.741 88.5703 36.6461 89.2973 35.6825C90.0331 34.7102 91.0405 33.9482 92.3193 33.3963C93.607 32.8357 95.153 32.5554 96.9575 32.5554C98.2451 32.5554 99.432 32.7087 100.518 33.0153C101.604 33.3131 102.55 33.7511 103.356 34.3292C104.162 34.8986 104.784 35.5993 105.222 36.4315C105.669 37.2636 105.892 38.214 105.892 39.2827V53H99.8481V50.1882H99.6904C99.3313 50.8714 98.8714 51.4496 98.3108 51.9226C97.759 52.3956 97.1064 52.7504 96.3531 52.9869C95.6085 53.2234 94.7676 53.3416 93.8303 53.3416ZM95.8144 49.1371C96.5064 49.1371 97.1283 48.9969 97.6801 48.7166C98.2407 48.4363 98.6875 48.0509 99.0203 47.5604C99.3532 47.0611 99.5196 46.483 99.5196 45.826V43.9077C99.3357 44.004 99.1123 44.0916 98.8495 44.1705C98.5955 44.2493 98.3152 44.3237 98.0086 44.3938C97.702 44.4639 97.3867 44.5252 97.0626 44.5778C96.7385 44.6303 96.4275 44.6785 96.1297 44.7223C95.5253 44.8187 95.0085 44.9676 94.5793 45.169C94.1588 45.3705 93.8347 45.6333 93.607 45.9574C93.388 46.2727 93.2785 46.6494 93.2785 47.0874C93.2785 47.7531 93.515 48.2611 93.988 48.6115C94.4698 48.9619 95.0786 49.1371 95.8144 49.1371ZM115.615 47.7049L115.641 40.0447H116.535L122.211 32.8182H129.49L121.055 43.1719H119.36L115.615 47.7049ZM109.821 53V26.0909H116.246V53H109.821ZM122.356 53L117.074 44.6172L121.304 40.0579L129.779 53H122.356Z"
          fill="black"
        />
        <Path
          d="M140.645 53.4205C138.928 53.4205 137.417 52.9693 136.112 52.0671C134.807 51.1561 133.787 49.9123 133.051 48.3356C132.324 46.7589 131.96 44.9719 131.96 42.9748C131.96 40.9776 132.328 39.1907 133.064 37.614C133.8 36.0373 134.82 34.7934 136.125 33.8825C137.431 32.9715 138.933 32.516 140.632 32.516C141.911 32.516 143.076 32.7788 144.127 33.3043C145.187 33.8299 146.063 34.5613 146.755 35.4986C147.456 36.4358 147.903 37.522 148.095 38.7571H146.466C146.203 37.3906 145.546 36.2607 144.495 35.3672C143.453 34.465 142.169 34.0138 140.645 34.0138C139.279 34.0138 138.061 34.3993 136.993 35.1701C135.924 35.9322 135.083 36.9877 134.47 38.3366C133.857 39.6768 133.55 41.2141 133.55 42.9485C133.55 44.6566 133.848 46.1895 134.444 47.5472C135.039 48.8962 135.871 49.9648 136.94 50.7532C138.009 51.5415 139.244 51.9357 140.645 51.9357C141.635 51.9357 142.537 51.7386 143.352 51.3445C144.175 50.9503 144.863 50.3897 145.415 49.6626C145.967 48.9356 146.33 48.0859 146.505 47.1136H148.135C147.942 48.3575 147.504 49.4524 146.821 50.3984C146.138 51.3445 145.266 52.0846 144.206 52.619C143.146 53.1533 141.959 53.4205 140.645 53.4205ZM139.739 52.8949H141.158L140.961 53.946C141.784 54.0774 142.445 54.3971 142.945 54.9052C143.444 55.422 143.694 56.1228 143.694 57.0075C143.694 58.006 143.334 58.7725 142.616 59.3068C141.907 59.8411 140.864 60.1214 139.489 60.1477L139.437 58.8995C140.365 58.882 141.057 58.7243 141.513 58.4265C141.968 58.1374 142.2 57.6776 142.209 57.0469C142.2 56.3461 141.959 55.8293 141.486 55.4964C141.013 55.1636 140.291 54.9928 139.318 54.984L139.739 52.8949ZM153.679 53V32.8182H155.269V53H153.679ZM161.983 53V32.8182H163.547V35.8665H163.705C164.09 34.8504 164.756 34.0445 165.702 33.4489C166.648 32.8532 167.787 32.5554 169.118 32.5554C170.581 32.5554 171.759 32.9058 172.652 33.6065C173.555 34.3073 174.203 35.2577 174.597 36.4577H174.742C175.136 35.2752 175.841 34.3292 176.857 33.6197C177.882 32.9102 179.143 32.5554 180.641 32.5554C182.594 32.5554 184.084 33.1729 185.108 34.408C186.142 35.6344 186.659 37.3162 186.659 39.4535V53H185.056V39.4535C185.056 37.7717 184.653 36.449 183.847 35.4854C183.041 34.5219 181.859 34.0401 180.299 34.0401C178.635 34.0401 177.356 34.5613 176.463 35.6037C175.569 36.6461 175.123 37.9731 175.123 39.5849V53H173.52V39.3484C173.52 37.7804 173.125 36.5059 172.337 35.5249C171.549 34.535 170.366 34.0401 168.79 34.0401C167.721 34.0401 166.797 34.2854 166.017 34.7759C165.246 35.2665 164.646 35.9409 164.217 36.7994C163.797 37.6578 163.586 38.6432 163.586 39.7557V53H161.983Z"
          fill="#76B852"
        />
        <Path
          d="M3 56.8519L10.4954 58.2605C53.6715 66.3751 98.0251 65.8815 141.01 56.8081V56.8081"
          stroke="#76B852"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </Svg>
    
      {routeList.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.name)}
            key={item.name}
          >
            <View style={drawerStyles.navLink}>
            <FontAwesome5 name={iconList[index]} size={24} color="black" />
            <Text style={drawerStyles.navText}> {item.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity onPress={logoutHandler}>
      <View style={drawerStyles.navLink}>
            <FontAwesome5 name={"door-open"} size={24} color="black" />
            <Text style={drawerStyles.navText}> Çıkış</Text>
            </View>
      </TouchableOpacity>
      
      </SafeAreaView>
    </View>
   
  );
}
