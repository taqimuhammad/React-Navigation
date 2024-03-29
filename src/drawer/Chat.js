import { View, Text ,StyleSheet } from 'react-native'
import React from 'react';

const Chat = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      <Text 
       onPress={() => {
        navigation.openDrawer();
      }}>Open Side Drawer or goBack button etc</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'aqua'
  }
})