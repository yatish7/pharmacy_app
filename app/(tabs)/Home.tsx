import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Dashboard() {
  const [selectedChart, setSelectedChart] = useState('patientCount'); // State to toggle between buttons

  return (
    <View style={styles.container}>
      {/* Buttons to switch between different options */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedChart('patientCount')}>
          <Text style={styles.buttonText}>Total Patient Count</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedChart('medicineSoldPrice')}>
          <Text style={styles.buttonText}>Total Medicine Sold Price</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setSelectedChart('medicineCost')}>
          <Text style={styles.buttonText}>Medicine Cost (From Distributor)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    backgroundColor: '#4DA1A9',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
