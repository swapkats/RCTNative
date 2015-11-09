/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var theme = require('../theme');

var {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight
} = React;

var Login = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require('../assets/img/login__bg.jpg')} />
        <View style={styles.colorOverlay}>
          <View style={styles.bottomSheet}>
            <Image style={styles.logo} source={require('../assets/img/limo_logo_white.png')} />
            <View>
              <TouchableHighlight style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Register</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.actionButton}>
                <Text style={styles.actionButtonText}>Login</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.10)'
  },
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    padding: theme.pageGutter
  },
  actionButton: {
    backgroundColor: theme.primaryColor,
    marginBottom: theme.gutter/2,
    padding: theme.gutter
  },
  actionButtonText: {
    color: '#fff',
    alignSelf: 'center'
  },
  textInp: {
    height: 40,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  logo: {
    alignSelf: 'center',
    width: 120,
    height: 120
  },
  background: {
    flex: 1
  }
});

module.exports = Login;
