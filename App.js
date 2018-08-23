import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tri Aji Sektiantoro</Text>
        <Text>XI RPL 4 (32) </Text>

        <Image style={{width: 400, height: 400}} 
        source={require('./IMG_20180812_174454.jpg')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
