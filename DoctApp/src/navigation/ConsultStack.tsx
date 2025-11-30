import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConsultScreen from '../screens/ConsultScreen';
import DiabetesScreen from '../screens/DiabetesScreen';

const Stack = createNativeStackNavigator();

export default function ConsultStack() {
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="ConsultMain" component={ConsultScreen} />
    //   <Stack.Screen name="Diabetes" component={DiabetesScreen} />
    // </Stack.Navigator>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConsultMain" component={ConsultScreen} />
    </Stack.Navigator>
  );
}
