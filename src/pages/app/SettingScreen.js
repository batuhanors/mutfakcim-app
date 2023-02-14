
import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps';

import * as Location from 'expo-location';

export default function SettingScreen() {

  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
 
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) { 
    text = JSON.stringify(location);
  }

  console.log(location);


  return (
    <View style={styles.container}>
      <MapView style={styles.map}  initialRegion={location?.coords} followsUserLocation={true}>
        
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});