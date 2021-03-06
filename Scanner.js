'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Component,
  TouchableHighlight
} = React;

var Camera = require('react-native-camera');

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: Camera.constants.Type.back
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref="cam"
          style={styles.camera}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          type={this.state.cameraType}
          barCodeType="qr"
        >
        </Camera>
        <TouchableHighlight onPress={this.onSwitchCamera.bind(this)}>
          <Text>Switch Camera</Text>
        </TouchableHighlight>
      </View>
    );
  }

  onBarCodeRead(e) {
    this.props.resultHandler(e)
  }

  onSwitchCamera() {
    var state = this.state;
    state.cameraType = (state.cameraType === Camera.constants.Type.back) ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  camera: {
    height: 250,
    width: 250
  }
});

module.exports = Scanner;
