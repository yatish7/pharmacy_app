import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';

// npm install react-native-table-component

export default class DistributorTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Phone Number', 'Email', 'Address'],
      widthArr: [120, 140, 200, 220],
    };
  }

  render() {
    const distributorData = [
  { name: 'Rajesh Kumar', phoneNumber: '9876543210', email: 'rajesh.kumar@example.com', address: '12 MG Road, Mumbai' },
  { name: 'Priya Sharma', phoneNumber: '8765432109', email: 'priya.sharma@example.com', address: '45 Connaught Place, Delhi' },
  { name: 'Amit Verma', phoneNumber: '7654321098', email: 'amit.verma@example.com', address: '78 Park Street, Kolkata' },
  { name: 'Neha Reddy', phoneNumber: '6543210987', email: 'neha.reddy@example.com', address: '101 Jubilee Hills, Hyderabad' },
  { name: 'Vikram Singh', phoneNumber: '5432109876', email: 'vikram.singh@example.com', address: '202 Anna Salai, Chennai' },
  { name: 'Suresh Iyer', phoneNumber: '4321098765', email: 'suresh.iyer@example.com', address: '303 MG Road, Pune' },
  { name: 'Anjali Mehta', phoneNumber: '9876012345', email: 'anjali.mehta@example.com', address: '12 Brigade Road, Bengaluru' },
  { name: 'Rahul Yadav', phoneNumber: '9765432101', email: 'rahul.yadav@example.com', address: '55 Sector 18, Noida' },
  { name: 'Pooja Desai', phoneNumber: '9098765432', email: 'pooja.desai@example.com', address: '88 Law Garden, Ahmedabad' },
  { name: 'Arjun Nair', phoneNumber: '9988776655', email: 'arjun.nair@example.com', address: '99 Marine Drive, Kochi' },
    ];

    const { tableHead, widthArr } = this.state;

    const tableData = distributorData.map(item => [
      item.name,
      item.phoneNumber,
      item.email,
      item.address,
    ]);

    return (
      <View style={styles.container}>
        {/* Heading */}
        <Text style={styles.heading}>Distributor Data</Text>

        {/* Distributor Table */}
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1, marginTop: 20 }}>
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
  heading: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#5DB996', marginBottom: 10, marginTop: 100 },
  header: { height: 50, backgroundColor: '#5DB996' },
  text: { textAlign: 'center', fontWeight: '500', color: '#333' },
  dataWrapper: { marginTop: -1, height: 300 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
});
