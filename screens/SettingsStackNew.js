import React, { Component } from 'react'
import { Image, FlatList, StyleSheet, Text, View, Button } from 'react-native'

export default class settingNew extends Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)
  }

  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>我是settingNew</Text>
        <Button title="跳转" color="#841584" onPress={() => {
           navigation.navigate('HomeDetail', {id: 122})
        }} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
