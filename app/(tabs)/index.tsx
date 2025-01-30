import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Dashboard';
import RegistrationForm from './screens/RegistrationForm';
import AllData from './screens/AllData';

// npm install @react-navigation/native
// npm install @react-navigation/stack

const Stack = createStackNavigator();

export default function index() {
  const [activeScreen, setActiveScreen] = useState<'RegistrationForm' | 'AllData'>('RegistrationForm');

  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
  
  );
}

function HomeScreen({ navigation }) {
  const [activeScreen, setActiveScreen] = useState<'RegistrationForm' | 'AllData'>('RegistrationForm');

  return (
    <View style={styles.container}>
      {/* Home Icon */}
      <View style={styles.homeContainer}>
      </View>

      {/* Buttons at the top */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeScreen === 'RegistrationForm' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveScreen('RegistrationForm')}
        >
          <Text style={styles.buttonText}>Registration Form</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activeScreen === 'AllData' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setActiveScreen('AllData')}
        >
          <Text style={styles.buttonText}>All Data</Text>
        </TouchableOpacity>
      </View>

      {/* Content Below Buttons */}
      <View style={styles.contentContainer}>
        {activeScreen === 'RegistrationForm' && <RegistrationForm />}
        {activeScreen === 'AllData' && <AllData />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  homeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  homeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4DA1A9',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 1, // Reduced marginTop from 50 to 30 to move buttons up
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#4DA1A9',
  },
  inactiveButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
  },
  dashboardButton: {
    backgroundColor: '#4DA1A9',
    padding: 15,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
});


