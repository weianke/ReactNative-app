import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setDataId } from './../store/actions'
import { View, Text, Button} from 'react-native';

// import { Container } from './styles';

class HomeDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0
    }
  }

  componentDidMount() {
    // console.log(this.props);
  }
  render() {
    return (
      <View>
        <Text>我是HOME-子页面 {this.props.id}</Text>
        <Button title='跳转' onPress={()=>{
          this.setState({
            id: this.props.id
          },()=>{
            const num = 6666
            this.props.setDataId(num)
          })
          // this.props.navigation.goBack()
        }}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    id: state.setData.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDataId: id => dispatch(setDataId(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetail)
