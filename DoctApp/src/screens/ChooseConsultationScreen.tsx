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

const ChooseConsultationScreen = () => {
  const navigation = useNavigation<any>();
  const [selectedOption, setSelectedOption] = useState<
    'phone' | 'video' | 'chat'
  >('video');

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
        <Text style={styles.title}>Choose Consultation</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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

        {/* Consultation Options */}
        <View style={styles.optionsContainer}>
          {/* Phone and Video Options Row */}
          <View style={styles.twoColumnRow}>
            {/* Phone Consultation */}
            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedOption === 'phone' && styles.selectedCard,
              ]}
              onPress={() => setSelectedOption('phone')}
            >
              <Text style={styles.optionTitle}>Phone Consultation</Text>
              <Text style={styles.price}>₹ 15/min</Text>
              <Text style={styles.duration}>(20min)</Text>
              <View style={styles.radioContainer}>
                <View
                  style={[
                    styles.radio,
                    selectedOption === 'phone' && styles.radioSelected,
                  ]}
                >
                  {selectedOption === 'phone' && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
            </TouchableOpacity>

            {/* Video Consultation */}
            <TouchableOpacity
              style={[
                styles.optionCard,
                selectedOption === 'video' && styles.selectedCard,
              ]}
              onPress={() => setSelectedOption('video')}
            >
              <Text style={styles.optionTitle}>Video Consultation</Text>
              <Text style={styles.price}>₹ 35/min</Text>
              <Text style={styles.duration}>(30min)</Text>
              <View style={styles.radioContainer}>
                <View
                  style={[
                    styles.radio,
                    selectedOption === 'video' && styles.radioSelected,
                  ]}
                >
                  {selectedOption === 'video' && (
                    <View style={styles.radioInner} />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Chat Consultation */}
          <TouchableOpacity
            style={[
              styles.optionCard,
              styles.fullWidthCard,
              selectedOption === 'chat' && styles.selectedCard,
            ]}
            onPress={() => setSelectedOption('chat')}
          >
            <Text style={styles.optionTitle}>Chat Consultation</Text>
            <Text style={styles.price}>₹ 50</Text>
            <Text style={styles.chatDetails}>(30 conversation texts)</Text>
            <Text style={styles.validity}>Valid: 72 hours</Text>
            <View style={styles.radioContainer}>
              <View
                style={[
                  styles.radio,
                  selectedOption === 'chat' && styles.radioSelected,
                ]}
              >
                {selectedOption === 'chat' && (
                  <View style={styles.radioInner} />
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Proceed Button */}
        {/* Proceed Button */}
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => navigation.navigate('ChooseDate')}
        >
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ChooseConsultationScreen;

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
    fontSize: 64,
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
    paddingHorizontal: 24,
    paddingTop: 24,
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
  optionsContainer: {
    marginBottom: 24,
  },
  twoColumnRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  optionCard: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 24,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    backgroundColor: '#e8f5e9',
    borderColor: '#4caf50',
  },
  fullWidthCard: {
    flex: undefined,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginVertical: 8,
  },
  duration: {
    fontSize: 16,
    color: '#666',
    marginTop: -10,
    paddingLeft: 20,
  },
  chatDetails: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  validity: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  radioContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  radio: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    backgroundColor: '#2e7d32',
    borderColor: '#2e7d32',
  },
  radioInner: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  proceedButton: {
    backgroundColor: '#2e7d32',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    marginBottom: 32,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
