// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import ShopScreen from '../screens/ShopScreen';
// import ConsultScreen from '../screens/ConsultScreen';
// import ForumScreen from '../screens/ForumScreen';
// import BulletinScreen from '../screens/BulletinScreen';

// const Tab = createBottomTabNavigator();

// export default function BottomTabs() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Shop" component={ShopScreen} />
//       <Tab.Screen name="Consult" component={ConsultScreen} />
//       <Tab.Screen name="Forum" component={ForumScreen} />
//       <Tab.Screen name="Bulletin" component={BulletinScreen} />
//     </Tab.Navigator>
//   );
// }

import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';
import ConsultScreen from '../screens/ConsultScreen';
import ForumScreen from '../screens/ForumScreen';
import BulletinScreen from '../screens/BulletinScreen';
import ConsultStack from './ConsultStack';

const Tab = createBottomTabNavigator();

const icons: any = {
  Home: require('../assets/icons/favorite.png'),
  Shop: require('../assets/icons/store.png'),
  Consult: require('../assets/icons/meeting.png'),
  Forum: require('../assets/icons/chat.png'),
  Bulletin: require('../assets/icons/bulletin-board.png'),
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        // ICONS
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              backgroundColor: focused ? '#c9f2d0' : 'transparent',
              padding: 10,
              borderRadius: 50,
            }}
          >
            <Image
              source={icons[route.name]}
              style={{
                width: 26,
                height: 26,
                tintColor: focused ? '#0b8a39' : '#ffffff',
              }}
            />
          </View>
        ),

        // TAB BAR STYLE
        tabBarStyle: {
          height: 90,
          paddingTop: 24,
          backgroundColor: '#3A643B',
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          position: 'absolute',
          overflow: 'hidden',
        },

        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      {/* <Tab.Screen name="Consult" component={ConsultScreen} /> */}
      <Tab.Screen name="Consult" component={ConsultStack} />
      <Tab.Screen name="Forum" component={ForumScreen} />
      <Tab.Screen name="Bulletin" component={BulletinScreen} />
    </Tab.Navigator>
  );
}
