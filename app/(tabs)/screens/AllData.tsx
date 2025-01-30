import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

// npm install react react-native


export default class PatientTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['S. No.', 'Name', 'Age', 'Gender', 'Last Visit Date', 'Medicine Purchased', 'Doctor Name'],
      widthArr: [40, 120, 60, 80, 120, 160, 140],
    };
  }

  render() {
    const patientData = [
        { s_no: 1, name: 'Rajesh Kumar', age: 28, gender: 'Male', lastVisitDate: '2024-01-10', medicinePurchased: 'Paracetamol', doctorName: 'Dr. Sharma' },
        { s_no: 2, name: 'Priya Sharma', age: 34, gender: 'Female', lastVisitDate: '2024-01-15', medicinePurchased: 'Ibuprofen', doctorName: 'Dr. Mehta' },
        { s_no: 3, name: 'Amit Verma', age: 45, gender: 'Male', lastVisitDate: '2024-01-20', medicinePurchased: 'Amoxicillin', doctorName: 'Dr. Iyer' },
        { s_no: 4, name: 'Neha Reddy', age: 30, gender: 'Female', lastVisitDate: '2024-01-22', medicinePurchased: 'Aspirin', doctorName: 'Dr. Nair' },
        { s_no: 5, name: 'Vikram Singh', age: 60, gender: 'Male', lastVisitDate: '2024-01-25', medicinePurchased: 'Metformin', doctorName: 'Dr. Kapoor' },
        { s_no: 6, name: 'Suresh Iyer', age: 50, gender: 'Male', lastVisitDate: '2024-01-28', medicinePurchased: 'Losartan', doctorName: 'Dr. Pillai' },
        { s_no: 7, name: 'Anjali Mehta', age: 42, gender: 'Female', lastVisitDate: '2024-02-02', medicinePurchased: 'Atorvastatin', doctorName: 'Dr. Rao' },
        { s_no: 8, name: 'Rahul Yadav', age: 37, gender: 'Male', lastVisitDate: '2024-02-05', medicinePurchased: 'Cough Syrup', doctorName: 'Dr. Das' },
        { s_no: 9, name: 'Pooja Desai', age: 29, gender: 'Female', lastVisitDate: '2024-02-10', medicinePurchased: 'Cetirizine', doctorName: 'Dr. Banerjee' },
        { s_no: 10, name: 'Arjun Nair', age: 55, gender: 'Male', lastVisitDate: '2024-02-15', medicinePurchased: 'Amlodipine', doctorName: 'Dr. Chatterjee' },
      ];

    const { tableHead, widthArr } = this.state;

    const tableData = patientData.map(item => [
      item.s_no,
      item.name,
      item.age,
      item.gender,
      item.lastVisitDate,
      item.medicinePurchased,
      item.doctorName,
    ]);

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    style={StyleSheet.flatten([
                      styles.row,
                      index % 2 && { backgroundColor: '#F7F6E7' },
                    ])}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#5DB996' },
  text: { textAlign: 'center', fontWeight: '500', color: '#333' },
  dataWrapper: { marginTop: -1, height: 300 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
});
