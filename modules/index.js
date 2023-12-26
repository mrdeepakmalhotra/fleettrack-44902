import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput, Picker, FlatList } from 'react-native';

const ScreenComponent = () => {
  const [contentType, setContentType] = useState('Video');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([{
    id: '1',
    type: 'Video',
    title: 'Video 1',
    description: 'This is video 1'
  }, {
    id: '2',
    type: 'Document',
    title: 'Document 1',
    description: 'This is document 1'
  }]);

  const renderItem = ({
    item
  }) => <View style={_styles.CWjnPkCl}>
      <Text>{item.type}</Text>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Button title="Edit" onPress={() => {}} />
      <Button title="Delete" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={_styles.YWWyshFG}>
      <View style={_styles.hbpBsRKV}>
        <Button title="Add New" onPress={() => {}} />
        <Button title="Edit" onPress={() => {}} />
        <Button title="Delete" onPress={() => {}} />
      </View>
      <View style={_styles.FCxDlEpv}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
      <View style={_styles.qwWtztDL}>
        <Picker selectedValue={contentType} onValueChange={itemValue => setContentType(itemValue)}>
          <Picker.Item label="Video" value="Video" />
          <Picker.Item label="Document" value="Document" />
        </Picker>
        <TextInput placeholder="Title" value={title} onChangeText={text => setTitle(text)} />
        <TextInput placeholder="Description" value={description} onChangeText={text => setDescription(text)} />
        <Button title="Submit" onPress={() => {}} />
      </View>
      <View style={_styles.rYTbasuQ}>
        <Button title="Save" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  CWjnPkCl: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  YWWyshFG: {
    flex: 1,
    padding: 20
  },
  hbpBsRKV: {
    flex: 1
  },
  FCxDlEpv: {
    flex: 4
  },
  qwWtztDL: {
    flex: 1
  },
  rYTbasuQ: {
    flex: 1
  }
});