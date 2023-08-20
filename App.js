import * as React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Start,
  Login,
  Register,
  SelectService,
  PanicActive,
  PanicInactive,
  Data,
  DataSubmitted,
} from './screens';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          /> 
           <Stack.Screen
            name="SelectService"
            component={SelectService}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PanicActive"
            component={PanicActive}
            options={{ headerShown: false }}
          /> 
           <Stack.Screen
            name="PanicInactive"
            component={PanicInactive}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="Data"
            component={Data}
            options={{ headerShown: false }}
          /> 
          <Stack.Screen
            name="DataSubmitted"
            component={DataSubmitted}
            options={{ headerShown: false }}
          /> 
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
