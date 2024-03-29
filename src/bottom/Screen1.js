import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Screen1</Text>
      <Text
        onPress={() => {
          navigation.openDrawer();
        }}>
        Open Side Drawer
      </Text>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightseagreen'
  }
})