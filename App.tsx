import { SafeAreaView, StyleSheet } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { appStyles } from './src/styles/screenStyles';

SplashScreen.preventAutoHideAsync();

export default function App() {

  return (
    <SafeAreaView style={appStyles.container}>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </SafeAreaView>

  );
}
