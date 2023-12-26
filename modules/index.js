import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, Text, TextInput, Button, FlatList, Picker } from 'react-native';
const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
const formats = ['HTML', 'XLS', 'CSV', 'PDF'];
const intervals = ['Hourly', 'Last 2 Hours', 'Daily', 'Weekly', 'Bi-Monthly', 'Monthly'];

const ScreenComponent = () => {
  return <SafeAreaView style={_styles.cUqZGnCa}>
      <Text style={_styles.bMKtrrRY}>Selected report title</Text>
      <Text style={_styles.MnvyMDGG}>Share with organization</Text>
      <Text style={_styles.tuuOLYpm}>All users</Text>
      <Text style={_styles.SuydqyVc}>Specific user role</Text>
      <Text style={_styles.SyVmlKZL}>Specific user- Search and select users</Text>
      <FlatList data={users} renderItem={({
      item
    }) => <Text style={_styles.jPARbSkO}>{item}</Text>} keyExtractor={item => item} />
      <Text style={_styles.JJEQqcvS}>Share via Email/Phone number</Text>
      <TextInput style={_styles.sFGaRLGT} placeholder="Enter multiple emails/Phone numbers" />
      <Text style={_styles.DdfiSciS}>Report Format</Text>
      <Picker>
        {formats.map((format, index) => <Picker.Item key={index} label={format} value={format} />)}
      </Picker>
      <Text style={_styles.INjIONsr}>Schedule</Text>
      <Text style={_styles.LYIRSodU}>Automated Sending</Text>
      <Text style={_styles.XKwSlNWn}>Enable the option for automated report sending</Text>
      <Text style={_styles.VneHOTvf}>Interval Selection</Text>
      <Picker>
        {intervals.map((interval, index) => <Picker.Item key={index} label={interval} value={interval} />)}
      </Picker>
      <Text style={_styles.WvCohTyH}>Day/Time Selection</Text>
      <TextInput style={_styles.OBqPqGqU} placeholder="Specify the day and time for automated report sending" />
      <Button title="Share" onPress={() => {}} />
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  cUqZGnCa: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bMKtrrRY: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10
  },
  MnvyMDGG: {
    fontSize: 20,
    margin: 10
  },
  tuuOLYpm: {
    fontSize: 20,
    margin: 10
  },
  SuydqyVc: {
    fontSize: 20,
    margin: 10
  },
  SyVmlKZL: {
    fontSize: 20,
    margin: 10
  },
  jPARbSkO: {
    fontSize: 18,
    margin: 10
  },
  JJEQqcvS: {
    fontSize: 20,
    margin: 10
  },
  sFGaRLGT: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10
  },
  DdfiSciS: {
    fontSize: 20,
    margin: 10
  },
  INjIONsr: {
    fontSize: 20,
    margin: 10
  },
  LYIRSodU: {
    fontSize: 20,
    margin: 10
  },
  XKwSlNWn: {
    fontSize: 20,
    margin: 10
  },
  VneHOTvf: {
    fontSize: 20,
    margin: 10
  },
  WvCohTyH: {
    fontSize: 20,
    margin: 10
  },
  OBqPqGqU: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10
  }
});