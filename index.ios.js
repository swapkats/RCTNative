/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./app/components/Login');

var {
  AppRegistry,
  StyleSheet,
  View,
  AppContainer
} = React;

var limo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('limo', () => limo);
