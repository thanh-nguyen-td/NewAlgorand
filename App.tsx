/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { LognIn, EnableLognIn } from '@screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={LognIn} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LognIn" component={LognIn} />
            <Stack.Screen name="EnableLognIn" component={EnableLognIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
