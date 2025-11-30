// import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// const ConsultScreen = () => {
//   const navigation = useNavigation<any>();

//   return (
//     <View style={styles.container}>
//       <View style={styles.uppercontainer}>
//         <Text style={styles.upperText}>Select Concern</Text>
//       </View>

//       <Text style={styles.heading}>Top Concerns</Text>

//       <TouchableOpacity
//         style={styles.iconContainer}
//         onPress={() => navigation.navigate('Diabetes')}
//       >
//         <Image
//           source={require('../assets/icons/blood-pressure.png')}
//           style={styles.icon}
//         />
//         <Text style={styles.iconLabel}>Diabetes</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ConsultScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   uppercontainer: {
//     backgroundColor: '#e1f7e9',
//     height: '30%',
//     justifyContent: 'center',
//     paddingLeft: 20,
//     borderBottomLeftRadius: 50,
//     borderBottomRightRadius: 50,
//   },
//   upperText: {
//     fontSize: 34,
//     fontWeight: '400',
//   },
//   heading: {
//     marginTop: 20,
//     marginLeft: 20,
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   iconContainer: {
//     width: 120,
//     height: 120,
//     marginTop: 20,
//     marginLeft: 20,
//     borderRadius: 60,
//     backgroundColor: '#E1F7E9',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 60,
//     height: 60,
//   },
//   iconLabel: {
//     marginTop: 8,
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

interface ConcernItem {
  id: number;
  name: string;
  icon: any;
  selected?: boolean;
}

const ConsultScreen = () => {
  const navigation = useNavigation<any>();

  const topConcerns: ConcernItem[] = [
    {
      id: 1,
      name: 'Hypertension',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 2,
      name: 'Anxiety',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 3,
      name: 'Obesity',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 4,
      name: 'Diabetes',
      icon: require('../assets/icons/blood-pressure.png'),
      selected: true,
    },
    {
      id: 5,
      name: 'Obesity',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 6,
      name: 'Hypertension',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 7,
      name: 'Rubella',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 8,
      name: 'Hypothermia',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 9,
      name: 'Frostbite',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 10,
      name: 'Diabetes',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 11,
      name: 'Concern',
      icon: require('../assets/icons/blood-pressure.png'),
    },
    {
      id: 12,
      name: 'Concern',
      icon: require('../assets/icons/blood-pressure.png'),
    },
  ];

  const ConcernCard = ({ item }: { item: ConcernItem }) => (
    <TouchableOpacity
      style={[styles.iconContainer, item.selected && styles.selectedContainer]}
      onPress={() => navigation.navigate('Diabetes')}
    >
      <Image source={item.icon} style={styles.icon} />
      <Text style={[styles.iconLabel, item.selected && styles.selectedLabel]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e1f7e9" />

      {/* Header Section */}
      <View style={styles.uppercontainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.upperText}>Select Concern</Text>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.heading}>Top Concerns</Text>

        {/* Concerns Grid */}
        <View style={styles.grid}>
          {topConcerns.map(item => (
            <ConcernCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏪</Text>
          <Text style={styles.navText}>Shop</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <View style={styles.activeNavCircle}>
            <Text style={styles.navIconActive}>🩺</Text>
          </View>
          <Text style={styles.navTextActive}>Consult</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🌿</Text>
          <Text style={styles.navText}>Forum</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
          <Text style={styles.navText}>Bulletin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConsultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  uppercontainer: {
    backgroundColor: '#e1f7e9',
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 24,
    zIndex: 10,
    padding: 8,
  },
  backIcon: {
    fontSize: 24,
    color: '#000',
  },
  upperText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
    marginTop: 40,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 100,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: '30%',
    aspectRatio: 1,
    marginBottom: 24,
    borderRadius: 60,
    backgroundColor: '#E1F7E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedContainer: {
    borderWidth: 2,
    borderColor: '#3A643C',
  },
  icon: {
    width: 50,
    height: 50,
    tintColor: '#3A643C',
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '500',
    color: '#666',
    textAlign: 'center',
  },
  selectedLabel: {
    color: '#3A643C',
    fontWeight: '600',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#3A643C',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  activeNavItem: {
    position: 'relative',
  },
  activeNavCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#5a8a5c',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -28,
    marginTop: -28,
    borderWidth: 4,
    borderColor: '#3A643C',
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 4,
  },
  navIconActive: {
    fontSize: 24,
    color: '#fff',
  },
  navText: {
    fontSize: 11,
    color: '#a8c9a9',
    fontWeight: '500',
  },
  navTextActive: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '600',
    marginTop: 4,
  },
});
