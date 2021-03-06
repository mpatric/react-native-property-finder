'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Component,
  TouchableHighlight
} = React;

class ScannerResult extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.data}>{this.props.data}</Text>
      </View>
    );
  }

  componentWillUnmount() {
    this.props.returnHandler()
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  data: {
    fontSize: 20,
  }
});

module.exports = ScannerResult;
