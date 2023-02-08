import AppLayout from "./src/layout/AppLayout";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./src/utils/redux/store";
import DrawerNav from "./src/utils/navigation/DrawerNav";
import AppContainer from "./AppContainer";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

// return <AppLayout />;
