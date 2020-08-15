import React from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome5Pro'

const colors = {
  blue: {
    light: '#3269C8',
    dark: '#fff',
  },
  white: {
    light: '#fff',
    dark: '#fff',
  },
  gray: {
    light: '#565656',
    dark: '#fff',
  },
}

export const IconComponent = ({
  color = 'blue',
  theme,
  style,
  ...restProps
}) => {
  return <Icon {...restProps} style={style} color={colors[color][theme]} />
}

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme,
})

const mapDispatchToProps = {}

export const IconC = connect(mapStateToProps, mapDispatchToProps)(IconComponent)
