import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Index() {
  return (
    <View style={styles.container}>
      <Text>hello, world</Text>
    </View>
  );
}

export default Index;
