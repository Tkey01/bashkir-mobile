import React from 'react'
import { connect } from 'react-redux'

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

export const IconComponent = ({ color, theme, ...restProps }) => {
  return <Icon {...restProps} color={colors[color][theme]} />
}

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme,
})

const mapDispatchToProps = {}

export const Icon = connect(mapStateToProps, mapDispatchToProps)(IconComponent)
