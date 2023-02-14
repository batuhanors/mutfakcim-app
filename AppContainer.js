
import React from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "./src/utils/redux/reducers/userReducer";
import DrawerNav from "./src/utils/navigation/DrawerNav";
import LoginStack from "./src/utils/navigation/LoginStack";

export default function AppContainer() {
  const token = useSelector(selectUserToken);

  return token ? <DrawerNav />: <LoginStack />;
}
