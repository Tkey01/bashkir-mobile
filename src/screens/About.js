import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

export const AboutComponent = () => {
  return (
    <View>
      <Text>About</Text>
    </View>
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export const About = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutComponent)
