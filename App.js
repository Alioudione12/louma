import React, { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Routes from './Routes';





export const  UserContext = React.createContext();
export const  ProfileContext = React.createContext();





const App=()=> {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:Config.GOOGLE_WEB_CLIENT_ID, 
      offlineAccess: false,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, 
    });
  }, []);

  return (
    <SafeAreaProvider>
    <UserContext.Provider value={{user, setUser}}>
      <ProfileContext.Provider value={{profile, setProfile}}>
          <Routes/>
        
      </ProfileContext.Provider>
    </UserContext.Provider>
    </SafeAreaProvider>
  );
}
export default App;
