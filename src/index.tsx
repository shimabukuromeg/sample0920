import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Main() {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>Main</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Sub');
        }}>
        <Text>go to sub</Text>
      </TouchableOpacity>
    </View>
  );
}

function Sub() {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  );
}

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
