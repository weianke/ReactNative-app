import React, { Component } from 'react';

import { View, Text, Button} from 'react-native';

// import { Container } from './styles';

export default class HomeDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0
    }
  }
  render() {
    console.log(this.state.id)
    return (
      <View>
        <Text>我是HOME-子页面</Text>
        <Button title='跳转' onPress={()=>{
          this.setState({
            id: this.props.navigation.state.params.id
          },()=>{
            console.log(this.state.id)
          })
        }}/>
      </View>
    )
  }
}
