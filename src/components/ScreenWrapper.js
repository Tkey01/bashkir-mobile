import React from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'

export const ScreenWrapperComponent = ({
  children,
  style,
  theme,
  ...restProps
}) => {
  return (
    <ScrollView
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#222',
        ...style,
      }}
      {...restProps}
    >
      {children}
    </ScrollView>
  )
}

const mapStateToProps = (state, ownProps) => ({
  theme: state.theme,
})

const mapDispatchToProps = {}

export const ScreenWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenWrapperComponent)
