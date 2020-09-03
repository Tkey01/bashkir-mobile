import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

export const FeedbackComponent = () => {
  return (
    <View>
      <Text>Feedback</Text>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export const Feedback = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedbackComponent)
