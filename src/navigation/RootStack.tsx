import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
