import React, { useEffect, useState, useRef } from 'react'
import { View, Text, PanResponder } from 'react-native'
import Animated from 'react-native-reanimated'

const CONTAINER = {
  width: 300,
  height: 13,
  marginTop: 18,
}

const LINE = {
  marginTop: 6,
  borderColor: '#3269C8',
  borderBottomWidth: 1,
}

const SERIF_1 = {
  position: 'absolute',
  borderColor: '#3269C8',
  borderLeftWidth: 1,
  width: 1,
  height: 13,
}

const SERIF_2 = {
  position: 'absolute',
  borderColor: '#3269C8',
  borderLeftWidth: 1,
  width: 1,
  height: 9,
}

const THUMB = {
  position: 'absolute',
  backgroundColor: '#3269C8',
  borderRadius: 5,
  width: 11,
  height: 11,
  left: 145.5,
  top: 1,
}

export const RangeInput = ({ partsCount = 8, width = 300 }) => {
  const [serifs, setSerifs] = useState([...new Array(partsCount + 1)])

  // const pan = useRef(new Animated.ValueXY()).current
  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        console.log('move!!!', gestureState)
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true
      },
    }),
  ).current

  useEffect(() => {
    setSerifs([...new Array(partsCount + 1)])
  }, [partsCount, width])

  return (
    <View style={CONTAINER} {...panResponder.panHandlers}>
      <View style={LINE} />
      {serifs.map((_, index) => {
        const x = index * (width / partsCount)
        return (
          <View
            key={index}
            style={[
              index % 2 ? SERIF_2 : SERIF_1,
              { left: x + 1 > width ? width - 1 : x, top: index % 2 ? 2 : 0 },
            ]}
          />
        )
      })}
      <View style={THUMB} />
    </View>
  )
}
