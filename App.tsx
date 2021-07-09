import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)
import {
  Auth,
  API,
} from 'aws-amplify';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { withAuthenticator } from 'aws-amplify-react-native'

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() =>{
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log(userInfo);

      if(userInfo){

      }
    }
    fetchUser();
  },[])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)
