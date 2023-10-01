import { Alert, SafeAreaView } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { appStyles } from './src/styles/screenStyles';
import * as Notifications from 'expo-notifications';

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {

  const checkNotificationPermission = async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();

    if (existingStatus !== 'granted') {
      await Notifications.requestPermissionsAsync();
    }
  }


  useEffect(() => {
    checkNotificationPermission()
  }, []);



  return (
    <SafeAreaView style={appStyles.container}>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </SafeAreaView>

  );
}
