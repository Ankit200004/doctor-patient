import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor App – Waiting for Call</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('CallScreen', {
            userId: 'doctor001', // doctor unique id
            userName: 'Doctor',
            callId: 'doctor_call_001', // SAME as patient
          })
        }
      >
        <Text style={styles.buttonText}>Accept Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
