import Toast from 'react-native-toast-message';
import { Provider } from "react-redux";
import { store } from "./src/utils/redux/store";

import AppContainer from "./AppContainer";

export default function App() {



  return (
    <Provider store={store}>
      <AppContainer />
      <Toast />
    </Provider>
  );
}


