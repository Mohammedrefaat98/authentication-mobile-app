import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './HomeStack';
import OnBoarding from './OnboardingStack';

const Stack = createStackNavigator();
export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} options={{title: ''}} />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
