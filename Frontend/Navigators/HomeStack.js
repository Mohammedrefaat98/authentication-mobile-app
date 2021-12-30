import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import ForgotPass from '../components/ForgotPass';

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} options={{title: ''}} />
      <Stack.Screen name="Signup" component={Signup} options={{title: ''}} />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}
