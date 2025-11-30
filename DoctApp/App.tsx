import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from './src/navigation/BottomTabs';
import DiabetesScreen from './src/screens/DiabetesScreen';
import ChooseConsultationScreen from './src/screens/ChooseConsultationScreen';
import ChooseDateScreen from './src/screens/ChooseDateScreen';
import ChooseTimeSlotScreen from './src/screens/ChooseTimeSlotScreen';
import YourConcernScreen from './src/screens/ConcernScreen';
import BasicInfoScreen from './src/screens/BasicInfo';
import AppointmentConfirmedScreen from './src/screens/AppointmentConfirm';
import PaymentSuccessScreen from './src/screens/PaymentSuccessScreen';
import MyBookingsScreen from './src/screens/MyBookingsScreen';
import CallScreen from './src/screens/CallScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs at bottom always */}
        <Stack.Screen name="MainTabs" component={BottomTabs} />

        {/* Screens ABOVE the tabs */}
        <Stack.Screen name="Diabetes" component={DiabetesScreen} />
        <Stack.Screen
          name="ChooseConsultation"
          component={ChooseConsultationScreen}
        />
        <Stack.Screen name="ChooseDate" component={ChooseDateScreen} />
        <Stack.Screen name="ChooseTimeSlot" component={ChooseTimeSlotScreen} />
        <Stack.Screen name="ConcernScreen" component={YourConcernScreen} />
        <Stack.Screen name="BasicInfo" component={BasicInfoScreen} />
        <Stack.Screen
          name="AppointmentConfirm"
          component={AppointmentConfirmedScreen}
        />
        <Stack.Screen
          name="PaymentSuccessScreen"
          component={PaymentSuccessScreen}
        />
        <Stack.Screen name="MyBookingScreen" component={MyBookingsScreen} />
        <Stack.Screen name="CallScreen" component={CallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
