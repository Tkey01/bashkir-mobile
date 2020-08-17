import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'

const selectFontFamily = (type) => {
  switch (type) {
    case 'b':
      return 'Roboto-Bold'
    case 'm':
      return 'Roboto-Medium'
    case 'r':
      return 'Roboto-Regular'
  }
}

const colors = {
  black: {
    light: '#000',
    dark: '#fff4e6',
  },
  gray: {
    light: '#505050',
    dark: '#fff4e6',
  },
  white: {
    light: '#fff',
    dark: '#fff',
  },
  blue: {
    light: '#3269C8',
    dark: '#3269C8',
  },
}

export const TextCComponent = ({
  type = 'r',
  color = 'black',
  theme = 'light',
  children,
  style,
  ...restProps
}) => {
  return (
    <Text
      style={{
        fontFamily: selectFontFamily(type),
        color: colors[color][theme],
        ...style,
      }}
      {...restProps}
      selectable
    >
      {children}
    </Text>
  )
}

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme,
})

const mapDispatchToProps = {}

export const TextC = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TextCComponent)
