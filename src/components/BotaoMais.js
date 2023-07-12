import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Feather } from '@expo/vector-icons';


export default function BotaoMais({ size, color, focused }) {
  return (
    <View style={styles.container}>
      <Icon name="plus" size={size} color={'#fff'} focused={focused} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#007CE0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:35,
  },
});
