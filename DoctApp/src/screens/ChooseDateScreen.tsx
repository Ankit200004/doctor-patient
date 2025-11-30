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

interface DateItem {
  date: string;
  day: string;
}

const ChooseDateScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedDate, setSelectedDate] = useState('06 Feb');

  const dates: DateItem[] = [
    { date: '06 Feb', day: 'Friday' },
    { date: '07 Feb', day: 'Saturday' },
    { date: '08 Feb', day: 'Sunday' },
    { date: '09 Feb', day: 'Monday' },
    { date: '10 Feb', day: 'Tuesday' },
    { date: '11 Feb', day: 'Wednesday' },
    { date: '12 Feb', day: 'Thursday' },
    { date: '13 Feb', day: 'Friday' },
    { date: '14 Feb', day: 'Saturday' },
    { date: '15 Feb', day: 'Sunday' },
    { date: '16 Feb', day: 'Monday' },
    { date: '17 Feb', day: 'Tuesday' },
  ];

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
        <Text style={styles.title}>Choose Date</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBarActive} />
          <View style={styles.progressBarInactive} />
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
          </View>
        </View>

        {/* Pick Appointment Date */}
        <Text style={styles.sectionTitle}>Pick Appointment Date</Text>

        {/* Date Grid */}
        <View style={styles.dateGrid}>
          {dates.map(item => (
            <TouchableOpacity
              key={item.date}
              style={[
                styles.dateCard,
                selectedDate === item.date && styles.dateCardSelected,
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === item.date && styles.dateTextSelected,
                ]}
              >
                {item.date}
              </Text>
              <Text
                style={[
                  styles.dayText,
                  selectedDate === item.date && styles.dayTextSelected,
                ]}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Selected Date Display */}
        <View style={styles.selectedDateContainer}>
          <Text style={styles.calendarIcon}>📅</Text>
          <Text style={styles.selectedDateText}>06 February 2025</Text>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() =>
            navigation.navigate('ChooseTimeSlot', { selectedDate })
          }
        >
          <Text style={styles.confirmButtonText}>Confirm Date</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ChooseDateScreen;

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
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  dateGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  dateCard: {
    width: '31%',
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  dateCardSelected: {
    backgroundColor: '#2e7d32',
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  dateTextSelected: {
    color: '#fff',
  },
  dayText: {
    fontSize: 14,
    color: '#666',
  },
  dayTextSelected: {
    color: '#fff',
  },
  selectedDateContainer: {
    backgroundColor: '#e8f5e9',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    // marginBottom: 24,
  },
  calendarIcon: {
    fontSize: 20,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2e7d32',
  },
  confirmButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
