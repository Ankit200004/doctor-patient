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

const MyBookingsScreen = () => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<'appointments' | 'orders'>(
    'appointments',
  );

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
        <Text style={styles.title}>My Bookings</Text>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Tab Buttons */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === 'appointments' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('appointments')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'appointments' && styles.activeTabText,
              ]}
            >
              Appointments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'orders' && styles.activeTab]}
            onPress={() => setActiveTab('orders')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'orders' && styles.activeTabText,
              ]}
            >
              Orders
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filter Button */}
        <View style={styles.filterRow}>
          <Text style={styles.filterText}>Filter Appointments</Text>
          <Text style={styles.filterIcon}>▼</Text>
        </View>

        {/* Appointments List */}
        <View style={styles.appointmentsList}>
          {/* Appointment 1 - Upcoming */}
          <View style={styles.appointmentCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Text style={styles.doctorName}>Dr. Prem</Text>
                <View style={styles.statusRow}>
                  <Text style={styles.specialty}>Orthodontist</Text>
                  <View style={styles.statusBadgeUpcoming}>
                    <Text style={styles.statusTextUpcoming}>Upcoming</Text>
                  </View>
                </View>
              </View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200',
                }}
                style={styles.doctorImage}
              />
            </View>

            <View style={styles.dateTimeRow}>
              <View style={styles.dateTime}>
                <Text style={styles.icon}>📅</Text>
                <Text style={styles.dateTimeText}>Tuesday, 13/09/2023</Text>
              </View>
              <View style={styles.dateTime}>
                <Text style={styles.icon}>🕐</Text>
                <Text style={styles.dateTimeText}>10:30 AM</Text>
              </View>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsText}>View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.startCallButton}
                onPress={() =>
                  navigation.navigate('CallScreen', {
                    userId: 'patient123', // your own ID
                    userName: 'Ankit', // your name
                    callId: 'doctor_call_001', // same ID for both caller & receiver
                  })
                }
              >
                <Text style={styles.startCallText}>Start Call</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.prescriptionBox}>
              <View style={styles.prescriptionContent}>
                <View>
                  <Text style={styles.prescriptionTitle}>
                    Check Prescription
                  </Text>
                  <Text style={styles.prescriptionSubtitle}>
                    Dr. Deepa has suggested some solution
                  </Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Appointment 2 - Completed */}
          <View style={styles.appointmentCard}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeaderLeft}>
                <Text style={styles.doctorName}>Dr. Deepa Godara</Text>
                <View style={styles.statusRow}>
                  <Text style={styles.specialty}>Orthodontist</Text>
                  <View style={styles.statusBadgeCompleted}>
                    <Text style={styles.statusTextCompleted}>Completed</Text>
                  </View>
                </View>
              </View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200',
                }}
                style={styles.doctorImage}
              />
            </View>

            <View style={styles.dateTimeRow}>
              <View style={styles.dateTime}>
                <Text style={styles.icon}>📅</Text>
                <Text style={styles.dateTimeText}>Tuesday, 13/09/2023</Text>
              </View>
              <View style={styles.dateTime}>
                <Text style={styles.icon}>🕐</Text>
                <Text style={styles.dateTimeText}>10:30 AM</Text>
              </View>
            </View>

            <View style={styles.viewDetailsCenter}>
              <TouchableOpacity style={styles.viewDetailsButtonCenter}>
                <Text style={styles.viewDetailsCenterText}>View Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyBookingsScreen;

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
  tabContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#1a1a1a',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  filterText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  filterIcon: {
    fontSize: 14,
    color: '#000',
  },
  appointmentsList: {
    gap: 16,
  },
  appointmentCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  cardHeaderLeft: {
    flex: 1,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  statusBadgeUpcoming: {
    backgroundColor: '#fff3e0',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  statusTextUpcoming: {
    color: '#e65100',
    fontSize: 13,
    fontWeight: '500',
  },
  statusBadgeCompleted: {
    backgroundColor: '#e8f5e9',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  statusTextCompleted: {
    color: '#2e7d32',
    fontSize: 13,
    fontWeight: '500',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  dateTimeRow: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 16,
  },
  dateTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    fontSize: 16,
  },
  dateTimeText: {
    fontSize: 14,
    color: '#666',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  viewDetailsButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2e7d32',
  },
  startCallButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#2e7d32',
    alignItems: 'center',
  },
  startCallText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
  prescriptionBox: {
    backgroundColor: '#e8e8f0',
    borderRadius: 12,
    padding: 16,
  },
  prescriptionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prescriptionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  prescriptionSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  chevron: {
    fontSize: 24,
    color: '#666',
  },
  viewDetailsCenter: {
    alignItems: 'center',
    marginTop: 16,
  },
  viewDetailsButtonCenter: {
    paddingVertical: 12,
    paddingHorizontal: 48,
  },
  viewDetailsCenterText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2e7d32',
  },
});
