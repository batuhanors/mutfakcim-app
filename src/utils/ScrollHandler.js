import { useRef } from "react";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const scrollRef = useRef();

export const scrollHandler = () => {
  console.log("Scroll Handler triggered!");
};
