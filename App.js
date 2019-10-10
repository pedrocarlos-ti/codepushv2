import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import CodePush from 'react-native-code-push';

// import { Container } from './styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>REACT NATIVE É FODA!@</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Botao1" onPress={() => alert('Sou um Botao')} />
        <Button title="Botao2" onPress={() => alert('Sou outro Botao!')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: 220,
  },
  text: {fontSize: 18},
});

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
