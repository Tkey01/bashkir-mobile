import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { ScreenWrapper } from '../components/ScreenWrapper'
import { TextC } from '../components/TextC'
import RNFetchBlob from 'rn-fetch-blob'

export const NormBaseComponent = () => {
  const onPressAction = () => {
    console.log('onPress')

    // const SRC_PATH = require('../assets/texts/grok.pdf')
    // console.log(SRC_PATH)
    // const DEST_PATH = RNFetchBlob.fs.dirs.DownloadDir

    // RNFetchBlob.fs
    //   .exists(SRC_PATH)
    //   .then((exist) => {
    //     Alert.alert('file exists', JSON.stringify(exist))
    //   })
    //   .catch((err) => {
    //     Alert.alert('file not exists', JSON.stringify(err))
    //   })

    // RNFetchBlob.fs
    //   .cp(SRC_PATH, DEST_PATH)
    //   .then((res) => {
    //     Alert.alert('file copied', JSON.stringify(res))
    //     console.log('file copied', res)
    //   })
    //   .catch((err) => {
    //     Alert.alert('file not copied', JSON.stringify(err))
    //     console.log('file not copied', err)
    //   })
  }
  return (
    <ScreenWrapper
      contentContainerStyle={{
        paddingVertical: 40,
        paddingHorizontal: 16,
      }}
    >
      <TouchableOpacity style={{ width: 200, height: 200, borderWidth: 1 }}>
        <TextC>Скачать файл</TextC>
      </TouchableOpacity>
    </ScreenWrapper>
  )
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = {}

export const NormBase = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NormBaseComponent)
