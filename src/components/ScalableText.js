import React from 'react'
import { connect } from 'react-redux'

import { TextB } from './TextB'
import { TextM } from './TextM'
import { TextR } from './TextR'

const textComponentSelector = (type) => {
  switch (type) {
    case 'r':
      return TextR
    case 'm':
      return TextM
    case 'b':
      return TextB
  }
}

export const ScalableTextComponent = ({
  scale,
  size = 14,
  children,
  type = 'r',
}) => {
  const TextComponent = textComponentSelector(type)

  return (
    <TextComponent
      style={{
        fontSize: size * scale,
      }}
    >
      {children}
    </TextComponent>
  )
}

const mapStateToProps = (state, ownProps) => ({
  scale: state.scale,
})

const mapDispatchToProps = {}

export const ScalableText = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScalableTextComponent)
