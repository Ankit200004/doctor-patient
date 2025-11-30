import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const YourConcernScreen = () => {
  const navigation = useNavigation<any>();
  const [severity, setSeverity] = useState(0); // 0 = Mild, 50 = Moderate, 100 = Severe
  const [duration, setDuration] = useState('28');
  const [timeUnit, setTimeUnit] = useState<
    'Days' | 'Weeks' | 'Months' | 'Year'
  >('Days');

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
        <Text style={styles.title}>Your Concern</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
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
            <Text style={styles.specialty}>Gynecology + 2 others</Text>
            <Text style={styles.callInfo}>Instant Call - ₹ 15/min</Text>
          </View>
        </View>

        {/* Concern Selection */}
        <View style={styles.concernContainer}>
          <Text style={styles.label}>Please select a concern</Text>
          <View style={styles.concernBox}>
            <Text style={styles.concernText}>Diabetes</Text>
          </View>
        </View>

        {/* Severity Slider */}
        <View style={styles.severityContainer}>
          <Text style={styles.sectionTitle}>
            Select severity of your concern
          </Text>

          <View style={styles.sliderContainer}>
            <View style={styles.sliderTrack}>
              <View style={[styles.sliderThumb, { left: `${severity}%` }]} />
            </View>
          </View>

          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabel}>Mild</Text>
            <Text style={styles.sliderLabel}>Moderate</Text>
            <Text style={styles.sliderLabel}>Severe</Text>
          </View>
        </View>

        {/* Duration Section */}
        <View style={styles.durationContainer}>
          <Text style={styles.sectionTitle}>
            How long have you been facing?
          </Text>

          <View style={styles.durationInput}>
            <TextInput
              style={styles.numberInput}
              value={duration}
              onChangeText={setDuration}
              keyboardType="numeric"
              placeholder="Enter duration"
            />
            <Text style={styles.dropdown}>▼</Text>
          </View>

          <View style={styles.radioGroup}>
            {(['Days', 'Weeks', 'Months', 'Year'] as const).map(unit => (
              <TouchableOpacity
                key={unit}
                style={styles.radioLabel}
                onPress={() => setTimeUnit(unit)}
              >
                <View style={styles.radioCustom}>
                  {timeUnit === unit && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioText}>{unit}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('BasicInfo')}
        >
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default YourConcernScreen;

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
  callInfo: {
    fontSize: 15,
    color: '#666',
  },
  concernContainer: {
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  concernBox: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 20,
    backgroundColor: '#fff',
  },
  concernText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  severityContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 24,
  },
  sliderContainer: {
    marginBottom: 16,
  },
  sliderTrack: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    position: 'relative',
  },
  sliderThumb: {
    width: 24,
    height: 24,
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    position: 'absolute',
    top: -9,
    marginLeft: -12,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  sliderLabel: {
    fontSize: 15,
    color: '#666',
  },
  durationContainer: {
    marginBottom: 32,
  },
  durationInput: {
    position: 'relative',
    marginBottom: 20,
  },
  numberInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  dropdown: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: '#999',
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 24,
  },
  radioLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioCustom: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2e7d32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2e7d32',
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  proceedButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 32,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
