import React from 'react'
import { connect } from 'react-redux'

import { TextC } from './TextC'

export const ScalableTextComponent = ({
  scale,
  size = 14,
  style,
  children,
  ...restProps
}) => {
  return (
    <TextC
      style={{
        fontSize: size * scale,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </TextC>
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
