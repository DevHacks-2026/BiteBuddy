import React from 'react';
import { PROVIDER_GOOGLE } from 'react-native-maps'
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Map() {
  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView>
          <MapView provider={PROVIDER_GOOGLE} style={styles.map} />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
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
