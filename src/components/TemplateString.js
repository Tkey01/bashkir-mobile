import React from 'react'

import { ScalableText } from './ScalableText'

export const TemplateString = ({ children }) => {
  return children.map((item, index) => (
    <ScalableText
      key={index}
      color={item.type === 'bold' ? 'black' : 'gray'}
      type={item.type === 'bold' ? 'b' : 'r'}
    >
      {item.text}
    </ScalableText>
  ))
}
