import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding1 from '../components/Onboarding1';
import Onboarding2 from '../components/Onboarding2';
import Onboarding3 from '../components/Onboarding3';
import Onboarding4 from '../components/Onboarding4';

const Stack = createStackNavigator();
export default function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Onboarding3"
        component={Onboarding3}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Onboarding4"
        component={Onboarding4}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}
