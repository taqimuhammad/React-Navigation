import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import BottomNavigation from '../bottom/BottomNavigation'

const Main = () => {
  return (
    <View style={styles.container}>
      <BottomNavigation />
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
      flex:1,
    }
  })