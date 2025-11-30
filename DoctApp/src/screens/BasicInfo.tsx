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

const BasicInfoScreen = () => {
  const navigation = useNavigation<any>();
  const [gender, setGender] = useState('Prefer not to say');
  const [age, setAge] = useState('28 years');
  const [height, setHeight] = useState('171 cms');
  const [weight, setWeight] = useState('63 kg');

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
        <Text style={styles.title}>Basic Info</Text>
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

        {/* Form Title */}
        <Text style={styles.formTitle}>
          Please confirm your basic information
        </Text>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          {/* Gender Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              value={gender}
              onChangeText={setGender}
              placeholder="Enter gender"
              placeholderTextColor="#999"
            />
          </View>

          {/* Age Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={setAge}
              placeholder="Enter age"
              placeholderTextColor="#999"
            />
          </View>

          {/* Height Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Height</Text>
            <TextInput
              style={styles.input}
              value={height}
              onChangeText={setHeight}
              placeholder="Enter height"
              placeholderTextColor="#999"
            />
          </View>

          {/* Weight Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Weight</Text>
            <TextInput
              style={styles.input}
              value={weight}
              onChangeText={setWeight}
              placeholder="Enter weight"
              placeholderTextColor="#999"
            />
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => navigation.navigate('AppointmentConfirm')}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BasicInfoScreen;

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
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 24,
  },
  formContainer: {
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    paddingLeft: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 18,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    backgroundColor: '#fff',
  },
  confirmButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginTop: 40,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
