/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {HomeScreen, MarketScreen} from './screens'

const Tab = createMaterialBottomTabNavigator();
interface Props {
    title: 'string'
}

const App: FC<Props> = props =>  {
  const isDarkMode:boolean = useColorScheme() == 'dark';

  return  (
  <NavigationContainer>
    <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen} />
     <Tab.Screen name="Market" component={MarketScreen} />
   </Tab.Navigator>
  </NavigationContainer>
  )

};

export default App;
