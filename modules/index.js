import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, Linking } from 'react-native';
import { Video } from 'expo-av';

const DocumentScreen = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videos = [{
    id: '1',
    title: 'Video 1',
    description: 'This is video 1'
  }, {
    id: '2',
    title: 'Video 2',
    description: 'This is video 2'
  } // Add more videos as needed
  ];
  return <SafeAreaView style={_styles.VvLSLBiS}>
      <View style={_styles.eqOYKXTn}>
        <Text style={_styles.ckkphOXK}>Document Section</Text>
        <Text>A document or user manual providing detailed instructions and information</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://tinyurl.com/42evm3m3')}>
          <Text style={_styles.DuokVyBG}>Click to view- pdf</Text>
        </TouchableOpacity>
      </View>

      <View style={_styles.SbPGGiuU}>
        <Text style={_styles.zIYLtMQt}>Video List Section</Text>
        <FlatList data={videos} keyExtractor={item => item.id} renderItem={({
        item
      }) => <TouchableOpacity onPress={() => setSelectedVideo(item)}>
              <Text style={_styles.vuooiVmV}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.rIfqAjFN} />
            </TouchableOpacity>} />
      </View>

      {selectedVideo && <View style={_styles.oSPynHnr}>
          <Text style={_styles.laimvwoM}>Video Player Section</Text>
          <Video source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} rate={1.0} volume={1.0} isMuted={false} resizeMode="cover" shouldPlay useNativeControls style={_styles.yavnxHxm} />
        </View>}

      <View style={_styles.WlwPWFUG}>
        <Text style={_styles.NiXFbZxG}>Contact Details Section</Text>
        <Text>Phone number for customer support: +1234567890</Text>
        <Text>Email address for customer support: support@example.com</Text>
      </View>
    </SafeAreaView>;
};

export default DocumentScreen;

const _styles = StyleSheet.create({
  VvLSLBiS: {
    flex: 1,
    backgroundColor: "#fff"
  },
  eqOYKXTn: {
    padding: 20
  },
  ckkphOXK: {
    fontSize: 24,
    fontWeight: "bold"
  },
  DuokVyBG: {
    color: "blue"
  },
  SbPGGiuU: {
    padding: 20
  },
  zIYLtMQt: {
    fontSize: 24,
    fontWeight: "bold"
  },
  vuooiVmV: {
    fontSize: 18,
    fontWeight: "bold"
  },
  rIfqAjFN: {
    width: "100%",
    height: 200
  },
  oSPynHnr: {
    padding: 20
  },
  laimvwoM: {
    fontSize: 24,
    fontWeight: "bold"
  },
  yavnxHxm: {
    width: "100%",
    height: 300
  },
  WlwPWFUG: {
    padding: 20
  },
  NiXFbZxG: {
    fontSize: 24,
    fontWeight: "bold"
  }
});