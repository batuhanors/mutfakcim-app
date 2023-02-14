import Toast from 'react-native-toast-message';
import { Provider } from "react-redux";
import { store } from "./src/utils/redux/store";

import AppContainer from "./AppContainer";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto/Roboto-Black.ttf'),
  });


  return fontsLoaded? (
    <Provider store={store}>
      <SafeAreaProvider>
      <AppContainer />
      <Toast />
      </SafeAreaProvider>
    </Provider>
  ): null
}


