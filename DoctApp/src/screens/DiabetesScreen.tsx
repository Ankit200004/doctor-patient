import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Define the Doctor type
interface Doctor {
  id: number;
  name: string;
  specialization: string;
  languages: string;
  experience: string;
  rating: number;
  price: string;
  freeCall: string;
  available: boolean;
}

// Define the props type for DoctorCard
interface DoctorCardProps {
  doctor: Doctor;
  navigation: any;
}

export default function DiabetesScreen() {
  const navigation = useNavigation<any>();

  const doctorData: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Prem',
      specialization: 'Gynecology + 2 others',
      languages: 'Hindi, English, Telugu',
      experience: '7years',
      rating: 4.5,
      price: '₹ 15/min',
      freeCall: 'Free (5min)',
      available: true,
    },
    {
      id: 2,
      name: 'Dr. Prem',
      specialization: 'Gynecology + 2 others',
      languages: 'Hindi, English, Telugu',
      experience: '7years',
      rating: 4.5,
      price: '₹ 15/min',
      freeCall: 'Free (5min)',
      available: true,
    },
    {
      id: 3,
      name: 'Dr. Prem',
      specialization: 'Gynecology + 2 others',
      languages: 'Hindi, English, Telugu',
      experience: '7years',
      rating: 4.5,
      price: '₹ 15/min',
      freeCall: 'Free (5min)',
      available: true,
    },
  ];

  const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, navigation }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        {/* Doctor Image */}
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
          }}
          style={styles.doctorImage}
        />

        {/* Doctor Details */}
        <View style={styles.doctorInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            {doctor.available && <View style={styles.onlineIndicator} />}
          </View>

          <Text style={styles.specialization}>{doctor.specialization}</Text>
          <Text style={styles.languages}>{doctor.languages}</Text>
          <Text style={styles.experience}>Exp : {doctor.experience}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>{doctor.price}</Text>
            <Text style={styles.freeCall}>{doctor.freeCall}</Text>
          </View>
        </View>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Text style={styles.starIcon}>⭐</Text>
          <Text style={styles.rating}>{doctor.rating}</Text>
        </View>
      </View>

      {/* Horizontal Divider Line */}
      <View style={styles.divider} />

      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.scheduleButton}
          onPress={() => navigation.navigate('ChooseConsultation')}
        >
          <Text style={styles.scheduleButtonText}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.freeCallButton}>
          <Text style={styles.freeCallButtonText}>Free Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <View style={styles.walletContainer}>
          <Text style={styles.walletIcon}>👛</Text>
          <Text style={styles.walletAmount}>₹ 150</Text>
        </View>
      </View>

      {/* Filter Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterText}>Hair</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.filterTab, styles.activeFilterTab]}>
          <Text style={styles.filterText}>Diabetes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterText}>D</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>≡</Text>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Doctor List */}
      <ScrollView
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {doctorData.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    fontSize: 24,
    color: '#000',
  },

  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  walletIcon: {
    fontSize: 18,
    marginRight: 4,
  },

  walletAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },

  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    maxHeight: 60,
  },

  filterTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },

  activeFilterTab: {
    backgroundColor: '#e8f5e9',
  },

  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },

  filterIcon: {
    fontSize: 18,
    marginRight: 6,
  },

  filterText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },

  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  cardContent: {
    flexDirection: 'row',
    marginBottom: 16,
  },

  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#e0e0e0',
  },

  doctorInfo: {
    flex: 1,
    marginLeft: 12,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },

  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginRight: 8,
  },

  onlineIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4caf50',
  },

  specialization: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },

  languages: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },

  experience: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontSize: 14,
    color: '#000',
    marginRight: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 16,
  },

  freeCall: {
    fontSize: 14,
    color: '#f44336',
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  starIcon: {
    fontSize: 16,
    marginRight: 4,
  },

  rating: {
    fontSize: 18,
    color: '#000',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  scheduleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  scheduleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3A643C',
  },

  freeCallButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#3A643C',
    alignItems: 'center',
  },

  freeCallButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
