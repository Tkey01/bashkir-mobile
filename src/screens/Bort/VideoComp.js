import React, { Component } from 'react'

import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Video from 'react-native-video-controls'

export class VideoComp extends Component {
  render() {
    const { style } = this.props

    return (
      <View style={[styles.container, { ...style }]}>
        <TouchableOpacity style={styles.fullScreen}>
          <Video
            source={require('../../assets/video/broadchurch.mp4')}
            style={styles.fullScreen}
            paused={true}
            disableBack
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    height: 360,
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
