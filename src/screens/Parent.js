import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import DrawerNavigation from '../drawer/DrawerNavigation'

const Parent = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigation />
    </View>
  )
}

export default Parent;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})