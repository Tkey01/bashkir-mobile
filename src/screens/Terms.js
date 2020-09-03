import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

export const TermsComponent = () => {
  return (
    <View>
      <Text>Terms</Text>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export const Terms = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TermsComponent)
