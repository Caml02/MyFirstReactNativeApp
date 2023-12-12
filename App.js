import React from 'react' 
import { StyleSheet, Text, View, Alert, TouchableNativeFeedback } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my frist App!</Text>
      <TouchableNativeFeedback onPress={() => Alert.alert('You tapped the button!')}>
        <Text>Press me!!</Text>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
