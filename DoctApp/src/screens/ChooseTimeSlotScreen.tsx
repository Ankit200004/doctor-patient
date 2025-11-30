import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const ChooseTimeSlotScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedTime, setSelectedTime] = useState('10:05 AM');

  const morningSlots = ['09:00AM', '09:35 AM', '10:05 AM'];
  const afternoonSlots = ['12:00PM', '12:35 AM', '01:05 PM'];
  const eveningSlots = [
    '06:00AM',
    '7:00 AM',
    '8:05 AM',
    '12:00PM',
    '12:35 AM',
    '01:05 PM',
  ];

  const renderTimeSlots = (slots: string[]) => {
    return (
      <View style={styles.timeGrid}>
        {slots.map((time, index) => (
          <TouchableOpacity
            key={`${time}-${index}`}
            style={[
              styles.timeSlot,
              selectedTime === time && styles.timeSlotSelected,
            ]}
            onPress={() => setSelectedTime(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#e8f5e9" />

      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Choose Time Slot</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarActive} />
          <View style={styles.progressBarActive} />
          <View style={styles.progressBarInactive} />
        </View>

        {/* Doctor Info */}
        <View style={styles.doctorCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200',
            }}
            style={styles.doctorImage}
          />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr. Prem</Text>
            <Text style={styles.specialty}>Male-Female Infertility</Text>
            <Text style={styles.consultationType}>
              Chat Consultation - Free
            </Text>
          </View>
        </View>

        {/* Pick a time slot */}
        <Text style={styles.sectionTitle}>Pick a time slot</Text>

        {/* Morning Slots */}
        <Text style={styles.timeCategory}>Morning</Text>
        {renderTimeSlots(morningSlots)}

        {/* Afternoon Slots */}
        <Text style={styles.timeCategory}>Afternoon</Text>
        {renderTimeSlots(afternoonSlots)}

        {/* Evening Slots */}
        <Text style={styles.timeCategory}>Evening</Text>
        {renderTimeSlots(eveningSlots)}

        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => navigation.navigate('ConcernScreen')}
        >
          <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ChooseTimeSlotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e8f5e9',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingTop: 50,
    paddingBottom: 40,
    paddingHorizontal: 24,
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
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
    marginTop: 20,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 32,
  },
  progressBarActive: {
    flex: 1,
    height: 4,
    backgroundColor: '#2e7d32',
    borderRadius: 2,
  },
  progressBarInactive: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 15,
    color: '#666',
    marginBottom: 4,
  },
  consultationType: {
    fontSize: 15,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  timeCategory: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginTop: 24,
    marginBottom: 12,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeSlot: {
    width: '31%',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  timeSlotSelected: {
    backgroundColor: '#2e7d32',
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  timeTextSelected: {
    color: '#fff',
  },
  confirmButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 32,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
