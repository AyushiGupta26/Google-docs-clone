import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import fire from '../fire'

var database = fire.database();

export default class LiveDoc extends React.Component{
  state = {
    text:'',
  }

  componentDidMount(){
    database.ref('text').on('value', snapshot => {
      let newText = snapshot.val();
      this.setState({text : newText})
    })
  }

  componentWillUnmount(){
    database.ref('text').off();
  }

  _sendChanges(newText){
    database.ref('text').set(newText)
  }

  render(){
    return (
      <View style={styles.container}>
      <TextInput 
       style={styles.text}
       multiline={true}
       placeholder='Type here ...'
       value={this.state.text}
       onChangeText = {newText => this._sendChanges(newText)}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    padding: 20,
    flex:1,
    fontSize: 24,
    textAlignVertical: 'top',
    //alignSelf:'center'
  }
})