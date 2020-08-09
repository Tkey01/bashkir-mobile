import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { View, Animated, TouchableWithoutFeedback, Easing } from 'react-native'

import * as ACTIONS from '../redux/actions'
import { textScales } from '../global/textScales'

const THUMB_WIDTH = 11
const MAGIC_MARGIN = 26
const LINE_WIDTH = 300

const CONTAINER = {
  width: LINE_WIDTH,
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
  width: THUMB_WIDTH,
  height: THUMB_WIDTH,
  top: 1,
  left: 0,
}

const calculateNewScaleIndex = (value, width, partsCount) => {
  const newValue = value - MAGIC_MARGIN
  const partWidth = width / partsCount

  return Math.round(newValue / partWidth)
}

const calculateOffsetX = (width, partsCount, scaleIndex) => {
  const partWidth = width / partsCount

  return scaleIndex * partWidth - THUMB_WIDTH / 2 + 0.5
}

export const RangeInputComponent = ({
  partsCount = 8,
  width = LINE_WIDTH,
  setScale,
  scale,
}) => {
  const initScaleIndex = textScales.findIndex((value) => value === scale)

  const thumbAnim = useRef(
    new Animated.Value(calculateOffsetX(width, partsCount, initScaleIndex)),
  ).current
  const [serifs, setSerifs] = useState([...new Array(partsCount + 1)])

  const moveThumb = (value) => {
    const scaleIndex = calculateNewScaleIndex(value, width, partsCount)

    setScale(scaleIndex)

    Animated.timing(thumbAnim, {
      toValue: calculateOffsetX(width, partsCount, scaleIndex),
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start()
  }

  useEffect(() => {
    setSerifs([...new Array(partsCount + 1)])
  }, [partsCount, width])

  return (
    <TouchableWithoutFeedback
      style={CONTAINER}
      onPress={(e) => {
        moveThumb(e.nativeEvent.pageX)
        console.log(e.nativeEvent)
      }}
    >
      <View style={CONTAINER}>
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
        <Animated.View
          style={[
            THUMB,
            {
              transform: [
                {
                  translateX: thumbAnim,
                },
              ],
            },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const mapStateToProps = (state, ownProps) => ({
  scale: state.scale,
})

const mapDispatchToProps = {
  setScale: ACTIONS.setScale,
}

export const RangeInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RangeInputComponent)
