import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

export const PrivacyPolicyComponent = () => {
  return (
    <View>
      <Text>PrivacyPolicy</Text>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export const PrivacyPolicy = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivacyPolicyComponent)
