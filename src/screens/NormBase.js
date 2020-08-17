import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { ScreenWrapper } from '../components/ScreenWrapper'
import { TextC } from '../components/TextC'

export const NormBaseComponent = () => {
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 40,
        paddingHorizontal: 16,
      }}
    ></ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export const NormBase = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NormBaseComponent)
