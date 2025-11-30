import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const PaymentSuccessScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#d4e8d4" />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Doctor Image with Check Badge */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
            }}
            style={styles.doctorImage}
          />
          <View style={styles.checkBadge}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>
        </View>

        {/* Payment Success Message */}
        <Text style={styles.title}>Paid ₹50</Text>
        <Text style={styles.subtitle}>
          Chat Consultation Booked Successfully
        </Text>

        {/* Wallet Balance Section */}
        <View style={styles.walletSection}>
          <Text style={styles.walletIcon}>👛</Text>
          <Text style={styles.walletLabel}>Available Balance</Text>
          <Text style={styles.balance}>₹ 660</Text>
        </View>
      </View>

      {/* Check Bookings Button */}
      <TouchableOpacity
        style={styles.bookingsButton}
        onPress={() => navigation.navigate('MyBookingScreen')}
      >
        <Text style={styles.bookingsButtonText}>Check Bookings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4e8d4',
    padding: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  doctorImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  checkBadge: {
    position: 'absolute',
    bottom: -10,
    left: '50%',
    marginLeft: -28,
    width: 56,
    height: 56,
    backgroundColor: '#2e7d32',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#d4e8d4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  checkIcon: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#2e5d32',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#5a7a5a',
    marginBottom: 48,
    textAlign: 'center',
  },
  walletSection: {
    alignItems: 'center',
  },
  walletIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  walletLabel: {
    fontSize: 15,
    color: '#5a7a5a',
    marginBottom: 8,
  },
  balance: {
    fontSize: 48,
    fontWeight: '700',
    color: '#2e5d32',
  },
  bookingsButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginBottom: 20,
  },
  bookingsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
