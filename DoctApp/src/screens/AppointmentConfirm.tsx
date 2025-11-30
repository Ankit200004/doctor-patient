import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AppointmentConfirmedScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Doctor Image with Check Badge */}
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
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
        </View>

        {/* Appointment Confirmed Title */}
        <Text style={styles.title}>Appointment Confirmed</Text>
        <Text style={styles.subtitle}>
          Thank you for choosing our Experts to help guide you
        </Text>

        {/* Appointment Details Card */}
        <View style={styles.detailsCard}>
          {/* Expert */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Expert</Text>
            <Text style={styles.value}>Dr. Prem</Text>
          </View>

          {/* Appointment Date */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Appointment Date</Text>
            <Text style={styles.value}>23 November 2023</Text>
          </View>

          {/* Appointment Time */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Appointment Time</Text>
            <Text style={styles.value}>17:28 PM</Text>
          </View>

          {/* Consultation Type */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Consultation Type</Text>
            <Text style={styles.value}>Phone Consultation</Text>
          </View>

          {/* Current Wallet Balance */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Current Wallet Balance</Text>
            <Text style={styles.value}>₹ 660</Text>
          </View>

          {/* Consultation Fee */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Consultation Fee</Text>
            <Text style={styles.value}>₹ 50</Text>
          </View>
        </View>

        {/* Make Payment Button */}
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate('PaymentSuccessScreen')}
        >
          <Text style={styles.paymentButtonText}>Make payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AppointmentConfirmedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 32,
  },
  imageWrapper: {
    position: 'relative',
    width: 200,
    height: 200,
  },
  doctorImage: {
    width: 200,
    height: 200,
    borderRadius: 32,
  },
  checkBadge: {
    position: 'absolute',
    bottom: -10,
    left: '50%',
    marginLeft: -24,
    width: 48,
    height: 48,
    backgroundColor: '#2e7d32',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  checkIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  detailsCard: {
    backgroundColor: '#e8f5e9',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    color: '#666',
    flex: 1,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'right',
    flex: 1,
  },
  paymentButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    padding: 18,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
