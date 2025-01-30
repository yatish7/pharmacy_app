import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  Animated,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// npm install @react-native-community/datetimepicker


export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [lastVisitDate, setLastVisitDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [medicinePurchased, setMedicinePurchased] = useState("");
  const [inputFocus] = useState(new Animated.Value(1)); // For input box animation

  // Handle input focus animation
  const handleFocus = () => {
    Animated.timing(inputFocus, {
      toValue: 1.1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = () => {
    Animated.timing(inputFocus, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  // Handle date change
  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false); // Hide the picker after selection on Android
    }
    if (selectedDate) {
      setLastVisitDate(selectedDate); // Update the selected date
    }
  };

  // Show the date picker
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Animated.View style={[styles.formContainer]}>
          <Text style={styles.heading}>Patient Registration</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <Animated.View style={{ transform: [{ scale: inputFocus }] }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </Animated.View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <Animated.View style={{ transform: [{ scale: inputFocus }] }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </Animated.View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gender</Text>
            <Animated.View style={{ transform: [{ scale: inputFocus }] }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your gender"
                value={gender}
                onChangeText={setGender}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </Animated.View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Visit Date</Text>
            <TouchableOpacity
              onPress={showDatepicker}
              style={styles.datePickerButton}
            >
              <Text style={styles.datePickerText}>
                {lastVisitDate.toDateString()}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={lastVisitDate}
                mode="date"
                display="default"
                maximumDate={new Date()} // Disable future dates
                onChange={handleDateChange}
              />
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Medicine Purchased</Text>
            <Animated.View style={{ transform: [{ scale: inputFocus }] }}>
              <TextInput
                style={styles.input}
                placeholder="Enter medicine name"
                value={medicinePurchased}
                onChangeText={setMedicinePurchased}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </Animated.View>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    width: "120%",
    maxWidth: 800,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
  },
  datePickerText: {
    fontSize: 14,
    color: "#555",
  },
  submitButton: {
    backgroundColor: "#6A42C2",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
