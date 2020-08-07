import React from 'react'

import { ScalableText } from './ScalableText'

export const TemplateString = ({ children }) => {
  console.log(children)
  return children.map((item, index) => (
    <ScalableText
      key={index}
      color={item.type === 'bold' ? '#000' : '#505050'}
      type={item.type === 'bold' ? 'b' : 'r'}
    >
      {item.text}
    </ScalableText>
  ))
}
