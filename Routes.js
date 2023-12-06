import React, { useContext, useEffect, useState } from 'react';


import Signin from './src/screens/auth/Signin';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Accueil from './src/screens/app/Accueil';
import Favoris from './src/screens/app/Favoris';
import Profil from './src/screens/app/Profil';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from './src/utils/colors';
import { Image } from 'react-native';
import MyListings from './src/screens/app/MyListings';
import { UserContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTokenToAxios } from './src/utils/request';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
        <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} />
    </Stack.Navigator>
    )
}

const Tabs = () => (
  <Tab.Navigator 
            screenOptions={({ route }) => ({
          tabBarIcon: ({ focused}) => {
            let icon;

            if (route.name === 'Accueil') {
              icon = focused
                ? require('./src/assets/tabs/home_active.png')
                : require('./src/assets/tabs/home.png');
            } else if (route.name === 'ProfileStack') {
              icon = focused
                ? require('./src/assets/tabs/profile_active.png')
                : require('./src/assets/tabs/profile.png');
            }else if (route.name === 'Favoris') {
              icon = focused
                ? require('./src/assets/tabs/bookmark_active.png')
                : require('./src/assets/tabs/bookmark.png');
            }

            // You can return any component that you like here!
            return <Image style={{ width: 24, height: 24 }} source={icon}/>;
          },
          headerShown:false,
          tabBarShowLabel: false,
          tabBarStyle: { borderTopColor:colors.deepRose, backgroundColor:colors.textPrimary },
        })}
  >
    <Tab.Screen name="Accueil" component={Accueil} />
    <Tab.Screen name="Favoris" component={Favoris} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
  )

const Routes=()=> {
    const {user, setUser} = useContext(UserContext);
    

    useEffect(() => {
        (async () => {
             const token = await AsyncStorage.getItem('auth_token'); //auth_token
             setUser({token})
        })();
    }, [])

    useEffect(() => {
      if (user?.token) {
        addTokenToAxios(user?.token);
      }
    }, [user])



// themes for the app
const theme = {
  colors: {
  background:colors.white,
  }
}

  return (

      <NavigationContainer theme={theme}>
        <Stack.Navigator>
        {user?.token ? (
          <>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
          </>
        ) : (
          <>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
          <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}/>
          </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
}
export default Routes;
